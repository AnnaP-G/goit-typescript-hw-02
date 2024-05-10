import axios from "axios";

const API_KEY = "jU8nOFoyE-64Pe2G-Y702xvQ0J3NVrfAyw9v0DraOcA";

export const requestImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&per_page=12&page=${page}`
  );
  return response.data;
};
