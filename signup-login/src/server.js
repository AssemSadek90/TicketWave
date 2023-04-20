import axios from 'axios';

/**
 * The URL or hostname of the backend server that the React application will communicate with.
 *
 * @constant {string} serverName
 */
const serverName = process.env.REACT_APP_SERVER_NAME;

/**
 * An instance of Axios with the base URL set to the server name.
 *
 * @constant {AxiosInstance} server
 */
const server = axios.create({
  baseURL: `${serverName}`,
});

export default server;
