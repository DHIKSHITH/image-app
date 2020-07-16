import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HicJAoZhfC9XGDdEjbo0KYrr_PjvtGjs3XHwnnaFMCU",
  },
});
