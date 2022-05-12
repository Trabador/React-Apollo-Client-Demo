import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "../apollo/querys";

const useGetExchangeRates = () => {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);
  return { data, loading, error };
};

export default useGetExchangeRates;
