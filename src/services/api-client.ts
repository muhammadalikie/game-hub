import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9b2afc3bafd440be9969e2c01f8ff732'
    }
})