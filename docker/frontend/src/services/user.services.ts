import {axiosServicesUser} from "./axios.services";

import {urls} from "../constants";
import {IUser} from "../interfaces/registration.interfase";

export const userServices = {
    login:(data: Partial<IUser>) =>axiosServicesUser.post<Partial<IUser>>(urls.login, data),
    registration: (data: IUser) => axiosServicesUser.post<IUser>(urls.registration, data)
}
