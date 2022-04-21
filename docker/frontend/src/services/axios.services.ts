import axios from "axios";

import baseUrl from "../constants/urls";
import backend from "../constants/registration.url";

export const axiosServices = axios.create({baseURL: baseUrl});
export const axiosServicesUser = axios.create({baseURL: backend})
