import { useApi } from "./useApi";

export default function useArmory() {
    const { data, fetchData, loading, error, sendData } = useApi();

    const fetchArmory = () => {
        fetchData("/api/armory/getArmoryItems");
    }

    async function borrow(item: any) {
        return sendData("/api/armory/borrow", { armoryItemId: item.id });
    }

    return { armoryItems: data ?? [], loading, error, fetchArmory, borrow }
}
