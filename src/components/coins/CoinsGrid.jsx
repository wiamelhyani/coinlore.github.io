import React, { useContext, useState } from "react";
import CoinContext from "../contexts/CoinContext";
import { Rating } from "primereact/rating";
import { Paginator } from "primereact/paginator";

const CoinsGrid = () => {
  const { coins } = useContext(CoinContext);
  const [first, setFirst] = useState(0);
  const onPageChange = (event) => {
    setFirst(event.first);
  };
  return (
    <>
      <div className="row">
        {coins.slice(first, first + 8).map((coin, index) => (
          <div key={index} className="col-3">
            <div className="p-4 border-1 surface-border surface-card border-round text-white">
              <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">
                    {coin.percent_change_1h}
                  </span>
                </div>
              </div>
              <div className="flex flex-column align-items-center gap-3 py-5">
                <img
                  className="w-5 shadow-2 border-round"
                  src={`https://www.coinlore.com/img/50x50/${coin.nameid}.png`}
                  alt={coin.name}
                  style={{ height: "80px" }}
                />
                <div className="text-2xl font-bold">{coin.name}</div>
                <div className="text-2xl font-bold">{coin.price_usd}</div>
                <Rating value={coin.name} readOnly cancel={false}></Rating>
              </div>
              <div className="flex align-items-center justify-content-between">
                <span className="text-2xl font-semibold"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Paginator
        first={first}
        rows={8}
        totalRecords={coins.length}
        onPageChange={onPageChange}
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      />
    </>
  );
};

export default CoinsGrid;
