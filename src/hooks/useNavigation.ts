import { useNavigate } from 'react-router-dom';

export default function useNavigation() {
    const navigate = useNavigate();

    const routes = [
        { name: 'home', path: '/pages/home' },
        { name: 'login', path: '/pages/login' },
    ];

    const goTo = (name: string) => {
        const route = routes.find(r => r.name === name);
        if (!route) return;

        const token = localStorage.getItem('token');
        const search = token ? `?${new URLSearchParams({ jwt: token })}` : '';
        navigate(`${route.path}${search}`);
    };

    return { goTo };
}