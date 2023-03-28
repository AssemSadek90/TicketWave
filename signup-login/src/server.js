import axios from 'axios';

const serverName = process.env.REACT_APP_SERVER_NAME;

const server = axios.create({
  baseURL: `${serverName}`,
});

export default server;
