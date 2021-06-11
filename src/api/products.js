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
    return api
      .get()
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
  addProduct({ imageURL, description }) {
    return api
      .post('/Product', { imageURL, description })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
  updateProduct({ id, imageURL, description }) {
    return api
      .put(`/Product/${id}`, { imageURL, description })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
  deleteProduct({ id }) {
    return api
      .delete(`/Product/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
  uploadImage({ formData }) {
    return api
      .post('/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => response.data);
  },
};
