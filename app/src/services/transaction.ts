import { api } from "@/lib/axios";

export const getTransactionTypes = async () => await api.get('/transaction/getTypes') 