import axios from 'axios';

const apiServer = axios.create({
    baseUrl: "http://localhost:9000/api"
})

export default apiServer;