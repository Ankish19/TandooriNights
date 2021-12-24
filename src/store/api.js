import axios from "axios";

const apiUrl = "https://tandoorinights.ca/api/";

export const getMenu = () => {
  return axios.post(
    `${apiUrl}get-restaurant-items/tandoori-nights-6rvkykyawv4cyzr`
  );
};
