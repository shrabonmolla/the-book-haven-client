import axios from "axios";
import React from "react";

const axisoInstance = axios.create({
  baseURL: `http://localhost:3000`,
});

export default function useAxios() {
  return axisoInstance;
}
