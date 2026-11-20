import { useApi } from "./useApi";
import useAuth from "./useAuth";


export default function useUsers() {
    type LoginData = {
        username: string;
        password: string;
    };

    type Member = {
        member: {
            id: number;
            name: string;
            roleId: number;
            trainingLevelId: number;
        }
    }

    const { loading, error, data, fetchData, sendData } = useApi();
    const { getUserId } = useAuth();

    const fetchUser = () => {
        let id = getUserId();
        if (id != null)
        {
            fetchData(`/api/users/${id}`);
        }
    }

    async function login (inputData: LoginData) {
        return sendData("/api/users/login", inputData);
    }

    const userItem = data as Member | null;

    return { login, error, loading, fetchUser, userItem}
}