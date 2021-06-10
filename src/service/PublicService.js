import axios from 'axios';
import {WEB_ADDRESS} from "../components/Constants";

const USER_API_BASE_URL = WEB_ADDRESS + 'public/';

class PublicService {

    registerUser(newUser) {
        return axios.post(USER_API_BASE_URL + "register", newUser);
    }

    getStatInfo() {
        return axios.get(USER_API_BASE_URL + "getAllStatistic");
    }
}

export default new PublicService();