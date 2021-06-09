import axios from 'axios';

const root = 'http://localhost:1234'; // process.env.API_DATA_ROOT;
const api = axios.create({
  baseURL: root,
  headers: {},
});
// POST            Creates a new resource.
// GET             Retrieves a resource.
// PUT             Updates an existing resource.
// DELETE          Deletes a resource.
export default {
  getProducts() {
    return api.get()
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
  addProduct({ imageURL, description }) {
    return api.post('/Product', { imageURL, description })
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  },
};
