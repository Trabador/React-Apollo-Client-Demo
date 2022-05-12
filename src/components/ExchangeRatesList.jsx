import React from "react";

const ExchangeRatesList = ({ rates }) => {
  return (
    <div>
      {rates.map((rate) => (
        <p key={rate.currency}>
          <b>{rate.currency}</b>
          <span> {rate.rate}</span>
        </p>
      ))}
    </div>
  );
};

export default ExchangeRatesList;
