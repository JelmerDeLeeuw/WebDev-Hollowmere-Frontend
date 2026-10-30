import { useApi } from "./useApi";


export default function useUsers() {
    type LoginData = {
        username: string;
        password: string;
    };

    const { loading, error, sendData } = useApi();

    async function login (inputData: LoginData) {
        return sendData("/api/users/login", inputData);
    }

    return { login, error, loading }
}
