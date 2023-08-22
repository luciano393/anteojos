import axios from 'axios';

const apiServer = axios.create();
apiServer.defaults.baseURL = "http://localhost:9000/";

export default apiServer;