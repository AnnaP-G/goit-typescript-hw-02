import axios from "axios";
import { ParamsRequest } from "../App/App.types";

const API_KEY = "jU8nOFoyE-64Pe2G-Y702xvQ0J3NVrfAyw9v0DraOcA";

export const requestImages = async <T>(paramsRequest: ParamsRequest
): Promise<T> => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${paramsRequest.query}&per_page=12&page=${paramsRequest.page}`
  );
  const data = response.data as T;
  return data;
};
