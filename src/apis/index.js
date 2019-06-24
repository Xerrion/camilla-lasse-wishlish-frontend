import axios from "axios";

export const api = axios.create({
  baseURL: "https://hidden-woodland-32976.herokuapp.com",
  headers: {
    Authorization: "Bearer a47d8081cc954f1f385b1620a56812819454df10"
  }
});
