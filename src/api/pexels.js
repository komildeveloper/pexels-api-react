import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.pexels.com',
  headers: {
    Authorization: '563492ad6f91700001000001d6a974d5c62d4cbabf923d7a841a508f'
  }
});
