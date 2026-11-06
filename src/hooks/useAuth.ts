import { useSearchParams } from 'react-router-dom';

export default function useAuth() {
    const [searchParams] = useSearchParams();

    const jwt = searchParams.get("jwt");
    
    const decodeJwt = () => {
        if(!jwt) {
            return null;
        }

        const payload = jwt.split('.')[1];
        return JSON.parse(atob(payload));
    }

    const getUserId = () => {
        const decoded = decodeJwt();
        return decoded ? decoded.user_id : null;
    }
    
    return {
        jwt,
        getUserId
    }
}
