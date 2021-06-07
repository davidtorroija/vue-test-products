import axios from 'axios';

const root = 'http://localhost:1234'; // process.env.API_DATA_ROOT;
const api = axios.create({
  baseURL: root,
  headers: {},
});

export default {
  getProducts() {
    return api.get()
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
};

// if ( typeof this.source === 'string' ) {
//     fetch(this.source)
//         .then(stream => stream.json())
//         .then(data => this.items = data)
//         .catch(error => console.error(error))
// } else {
//     this.items = this.source
// }
