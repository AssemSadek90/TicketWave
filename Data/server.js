const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const routes = require('./routes.json');

server.use(jsonServer.rewriter(routes));
server.use(jsonServer.bodyParser);
server.use(middlewares);

var event_ID = 0;

server.post('/auth/signup', (req, res) => {
  const { username, password1, email } = req.body;
  const newUser = {
    id: Date.now(),
    username,
    password1,
    pk: '1',
    email,
    is_active: true,
  };
  router.db.get('users').push(newUser).write();
  const response = {
    access_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NDE3NjE1MCwiaWF0IjoxNjgzNTcxMzUwLCJqdGkiOiJhMzQzZWQ4NTljZjA0NDQ3YWFmNThjMzVlYTc5MThhMCIsInVzZXJfaWQiOjR9.jA9kH5ucCJR7YmPKYeROGh7tD7J2FrSuYPYfo6lDFxE',
    refresh_token: 'your_refresh_token_here',
    pk: newUser.pk,
    username: newUser.username,
    user: {
      pk: newUser.pk,
    },
  };
  res.json(response);
});

server.get('/users/email/:email', (req, res) => {
  const { email } = req.params;

  const db = router.db;
  const users = db.get('users').value();

  const foundUser = users.find((user) => user.email === email);
  if (foundUser) {
    res.json({
      username: 'dummy_username',
      email: email,
    });
  } else {
    res.json({});
  }
});

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  const db = router.db;
  const users = db.get('users').value();

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (foundUser) {
    const accessToken = 'your_generated_access_token';

    res.json({
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NDE3NjE1MCwiaWF0IjoxNjgzNTcxMzUwLCJqdGkiOiJhMzQzZWQ4NTljZjA0NDQ3YWFmNThjMzVlYTc5MThhMCIsInVzZXJfaWQiOjR9.jA9kH5ucCJR7YmPKYeROGh7tD7J2FrSuYPYfo6lDFxE',
      refresh_token: 'your_refresh_token',
    });
  } else {
    res.status(401).json({
      error: 'Invalid email or password',
    });
  }
});

server.get('/users/id/:id', (req, res) => {
  const { id } = req.params;

  // Perform the search logic to find the user by their ID
  const db = router.db; // Access the database object
  const users = db.get('users').value(); // Get the users array from the database

  const foundUser = users.find((user) => user.id === parseInt(id));
  if (foundUser) {
    // Return the user information in the response
    const { email, username } = foundUser;
    res.json({
      email,
      username,
    });
  } else {
    // Return an error response if the user is not found
    res.status(404).json({
      error: 'User not found',
    });
  }
});

// server.get('/events/retrieve/:id', (req, res) => {
//   const { id } = req.params;

//   // Perform the search logic to find the event by its ID
//   const db = router.db; // Access the database object
//   const events = db.get('events').value(); // Get the events array from the database

//   const foundEvent = events.find((event) => event.id === parseInt(id));
//   if (foundEvent) {
//     // Return the event information in the response
//     const {
//       start,
//       end,
//       name,
//       video_url,
//       status,
//       timezone,
//       logo,
//       organizer,
//       venue,
//       category,
//       summary,
//       description,
//       url,
//       type,
//       price,
//       waitlist,
//       fully_booked,
//       created,
//       changed,
//       age_restriction,
//     } = foundEvent;
//     res.json({
//       start,
//       end,
//       name,
//       video_url,
//       status,
//       timezone,
//       logo,
//       organizer,
//       venue,
//       category,
//       summary,
//       description,
//       url,
//       type,
//       price,
//       waitlist,
//       fully_booked,
//       timezone,
//       created,
//       changed,
//       age_restriction,
//     });
//   } else {
//     // Return an error response if the event is not found
//     res.status(404).json({
//       error: 'Event not found',
//     });
//   }
// });

server.get('/events/list', (req, res) => {
  const { owner } = req.query;

  const db = router.db;
  const events = db.get('events').value();

  let results;
  if (owner) {
    results = events.filter((event) => event.owner === parseInt(owner));
  } else {
    results = events;
  }

  const eventList = { results };

  res.json(eventList);
});

// server.get('/events/amount_of_tickets_sold/:event_id', (req, res) => {
//   const { event_id } = req.params;

//   // Perform the logic to retrieve the number of tickets sold for the specified event
//   const db = router.db; // Access the database object
//   const tickets = db.get('tickets').value(); // Get the tickets array from the database

//   const soldTickets = tickets.filter(
//     (ticket) => ticket.event_id === parseInt(event_id)
//   );

//   // Return the number of tickets sold in the response
//   res.json({
//     ticketsSold: soldTickets.length,
//   });
// });

server.get('/events/amount_of_tickets_sold/:event_id', (req, res) => {
  const { event_id } = req.params;
  const ticketsSold = router.db.get('ticketsSold').get(event_id).value();

  res.json({ ticketsSold });
});

server.post('/events/create', (req, res) => {
  const data = req.body;

  // Generate an event ID
  event_ID = event_ID + 1;
  const eventId = event_ID;

  // Add the event to the database
  router.db
    .get('events')
    .push({ id: eventId, ...data })
    .write();

  // Return the event ID in the response
  res.json({ id: eventId });
});

server.post('/tickets/create', (req, res) => {
  const data = req.body;
  // Add the event to the database
  router.db.push({ data }).write();
});

server.post('/discounts/create', (req, res) => {
  const data = req.body;
  // Add the event to the database
  router.db.push({ data }).write();
});

server.post('/CSV/create', (req, res) => {
  const data = req.body;
  // Add the event to the database
  router.db.push({ data }).write();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
