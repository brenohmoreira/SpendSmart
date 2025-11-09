import { getTransactionTypes } from "@/services/transaction";
import useSWR from "swr";

const fetcher = () => getTransactionTypes().then(r => r.data);

interface TransactionType {
  id: number;
  nameTransaction: string;
}

export function useGetTransactionTypes(shouldFetch: boolean = true) {
    const { data, error, isLoading } = useSWR<TransactionType[]>(
        shouldFetch ? "/transaction/getTypes" : null,
        fetcher
    )

    return { types: data ?? [], error, loading: isLoading }
}
