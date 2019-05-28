import axios from 'axios';

export default class AuthService {
  static checkToken = async token => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + 'api/users/current',
      { headers: { Authorization: `Token ${token}` } }
    );
    if(response.data.user)
        return true;
    return false;
  };
}
