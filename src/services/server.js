import axios from 'axios';

const apiServer = axios.create({
    baseUrl: "http://localhost:9000/"
})

export default apiServer;