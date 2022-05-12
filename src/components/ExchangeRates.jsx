import React from "react";
import ErrorMsg from "./ErrorMsg";
import LoadingMsg from "./LoadingMsg";
import ExchangeRatesList from "./ExchangeRatesList";
import useGetExchangeRates from "../hooks/useGetExchangeRates";

const ExchangeRates = () => {
  const { data, loading, error } = useGetExchangeRates();

  if (error) return <ErrorMsg />;

  return (
    <div>
      <h2>Exchange Rates</h2>
      {loading ? <LoadingMsg /> : <ExchangeRatesList rates={data.rates} />}
    </div>
  );
};

export default ExchangeRates;
