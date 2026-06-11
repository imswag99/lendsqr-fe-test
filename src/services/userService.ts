import axios from "axios";
import type { User } from "../types/user";

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(
        "https://mockserver.in/api/vast-cloud-1707/users",
    );

    return response.data;
};
