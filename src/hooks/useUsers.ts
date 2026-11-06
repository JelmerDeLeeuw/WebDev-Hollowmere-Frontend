import { useApi } from "./useApi";


export default function useUsers() {
    type LoginData = {
        username: string;
        password: string;
    };

    const { loading, error, data, fetchData, sendData } = useApi();

    const fetchUser = (id: number) => {
        fetchData(`/api/users/${id}`);
    }

    async function login (inputData: LoginData) {
        return sendData("/api/users/login", inputData);
    }

    return { login, error, loading, fetchUser, userItem: data }
}
