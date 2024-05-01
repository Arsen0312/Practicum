import $api from "../http"
import {AxiosResponse} from "axios";
import {IUser} from "../../../../4entities/user/IUser";

export default class UserService {
    static async fetchUsers(email: string, password: string): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>("/auth/users",)
    }
}