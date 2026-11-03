import { useApi } from "./useApi";

export default function useArmory() {
    const { data, fetchData, loading, error } = useApi();
    
    const fetchArmory = () => {
        fetchData("/api/armory/getArmoryItems");        
    }

    return { armoryItems: data, loading, error, fetchArmory }
}
