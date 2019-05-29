import axios from "axios";

export const api = axios.create({
  baseURL: "https://hidden-woodland-32976.herokuapp.com"
});
