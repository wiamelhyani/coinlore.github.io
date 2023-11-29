import React, { useContext, useState } from "react";
import { Rating } from "primereact/rating";
import ExchangeContext from "../contexts/ExchangeContext";
import { Paginator } from "primereact/paginator";

const ExchangeGrid = () => {
  const { exchange } = useContext(ExchangeContext);
  const [first, setFirst] = useState(0);

  const onPageChange = (event) => {
    setFirst(event.first);
  };
  return (
    <div className="row">
      {exchange.slice(first, first + 8).map((item) => (
        <div className="col-3">
          <div className="p-4 border-1 surface-border surface-card border-round">
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
              <div className="flex align-items-center gap-2 text-white">
                <i className="pi pi-tag"></i>
                <span className="font-semibold ">{item.active_pairs}</span>
              </div>
            </div>
            <div className="flex flex-column align-items-center gap-3 py-5">
              <img
                className="w-5 shadow-2 border-round"
                src={`https://c1.coinlore.com/img/exchanges/25x25/${item.name_id}.png`}
                alt={item.name}
                style={{ height: "80px" }}
              />
              <div className="text-2xl font-bold text-white">{item.name}</div>
              <div className="text-2xl font-bold text-white">
                {item.country}
              </div>
              <Rating
                value={item.active_pairs}
                readOnly
                cancel={false}
              ></Rating>
            </div>
            <div className="flex align-items-center justify-content-between">
              <span className="text-2xl font-semibold"></span>
            </div>
          </div>
        </div>
      ))}
      <Paginator
        first={first}
        rows={8}
        totalRecords={exchange.length}
        onPageChange={onPageChange}
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      />
    </div>
  );
};

export default ExchangeGrid;
