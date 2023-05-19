import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/users';

export default new class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}
