import axios from "axios";

// singleton
export const API = axios.create({
  baseURL: "https://6085c7add14a87001757847a.mockapi.io/api/",
});
