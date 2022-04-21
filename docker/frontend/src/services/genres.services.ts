import {axiosServices} from "./axios.services";

import {IGenre} from "../interfaces";
import {urls} from "../constants";

export const genresServices = {
    getAll: () => axiosServices.get<IGenre>(urls.genre)
}