// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// server.use(jsonServer.bodyParser);

// // Define custom routes
// server.post('/auth/login', (req, res) => {
//   const { email, password } = req.body;

//   // Retrieve the user data from the database
//   const users = router.db.get('users').value();
//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (user) {
//     res.status(200).json({ message: 'Login successful', user });
//   } else {
//     res.status(401).json({ message: 'Invalid email or password' });
//   }
// });

// server.get('/users/email/:email', (req, res) => {
//   const email = req.params.email;
//   const user = router.db.get('users').find({ email }).value();
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running');
// });
//----------------------------------2----------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// // POST /auth/signup endpoint
// app.post('/auth/signup', (req, res) => {
//   const user = req.body;

//   // Generate mock access and refresh tokens
//   const accessToken = 'mock-access-token';
//   const refreshToken = 'mock-refresh-token';

//   // Generate a mock user ID
//   const userId = Math.floor(Math.random() * 1000) + 1;

//   // Save user data in the mock database
//   const newUser = { ...user, pk: userId };
//   db.users.push(newUser);

//   // Send the response with access and refresh tokens
//   res.json({
//     access_token: accessToken,
//     refresh_token: refreshToken,
//     user: newUser,
//   });
// });

// app.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });
//----------------------------------3----------------------------------

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

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
    // Include any additional user credentials you need
  };
  res.json(response);
}); // Add closing brace here

server.get('/users/email/:email', (req, res) => {
  const { email } = req.params;

  // Perform the search logic to check if the user exists
  const db = router.db; // Access the database object
  const users = db.get('users').value(); // Get the users array from the database

  const foundUser = users.find((user) => user.email === email);
  if (foundUser) {
    // Return dummy data in response.data.username if the user exists
    res.json({
      username: 'dummy_username',
      email: email,
    });
  } else {
    // Return an empty response if the user doesn't exist
    res.json({});
  }
});

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Perform the login logic to check if the email and password match
  const db = router.db; // Access the database object
  const users = db.get('users').value(); // Get the users array from the database

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (foundUser) {
    // Generate an access token (dummy token for example)
    const accessToken = 'your_generated_access_token';

    // Return the access token in the response
    res.json({
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NDE3NjE1MCwiaWF0IjoxNjgzNTcxMzUwLCJqdGkiOiJhMzQzZWQ4NTljZjA0NDQ3YWFmNThjMzVlYTc5MThhMCIsInVzZXJfaWQiOjR9.jA9kH5ucCJR7YmPKYeROGh7tD7J2FrSuYPYfo6lDFxE',
      refresh_token: 'your_refresh_token',
    });
  } else {
    // Return an error response if the email and password don't match
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

server.get('/events/retrieve/:id', (req, res) => {
  const { id } = req.params;

  // Perform the search logic to find the event by its ID
  const db = router.db; // Access the database object
  const events = db.get('events').value(); // Get the events array from the database

  const foundEvent = events.find((event) => event.id === parseInt(id));
  if (foundEvent) {
    // Return the event information in the response
    const {
      start,
      end,
      name,
      video_url,
      status,
      timezone,
      logo,
      organizer,
      venue,
      category,
      summary,
      description,
      url,
      type,
      price,
      waitlist,
      fully_booked,
      created,
      changed,
      age_restriction,
    } = foundEvent;
    res.json({
      start,
      end,
      name,
      video_url,
      status,
      timezone,
      logo,
      organizer,
      venue,
      category,
      summary,
      description,
      url,
      type,
      price,
      waitlist,
      fully_booked,
      timezone,
      created,
      changed,
      age_restriction,
    });
  } else {
    // Return an error response if the event is not found
    res.status(404).json({
      error: 'Event not found',
    });
  }
});

server.get('/events/list', (req, res) => {
  const { owner } = req.query;

  // Perform the logic to retrieve events based on the specified owner or all events if no owner is provided
  const db = router.db; // Access the database object
  const events = db.get('events').value(); // Get the events array from the database

  let results;
  if (owner) {
    // Filter events by owner if owner is provided
    results = events.filter((event) => event.owner === parseInt(owner));
  } else {
    // Return all events if no owner is provided
    results = events;
  }

  const eventList = { results };
  // Return the list of events in the response
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

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
