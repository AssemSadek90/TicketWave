const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Define custom routes
server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  // Retrieve the user data from the database
  const users = router.db.get('users').value();
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

server.get('/users/email/:email', (req, res) => {
  const email = req.params.email;
  const user = router.db.get('users').find({ email }).value();
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
