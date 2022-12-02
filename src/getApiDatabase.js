import axios from "axios";

export const getApiDatabase = (url) =>
  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log(error));
