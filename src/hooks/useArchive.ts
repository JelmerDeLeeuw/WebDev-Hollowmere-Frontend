import { useApi } from "./useApi";

export default function useArchive() {
    const { data, fetchData, loading, error } = useApi();

    const fetchArchive = () => {
        fetchData("/api/report/getReports");
    }

    return { archiveItems: data ?? [], loading, error, fetchArchive }
}
