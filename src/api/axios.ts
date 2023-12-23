import axios from "axios";
import { getContentType } from "../utils/api.utils";

export const axiosDefault = axios.create({
  baseURL: "http://localhost:4444/",
  headers: getContentType(),
});
