import React, { useContext } from "react";
import CoinContext from "../contexts/CoinContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeicons/primeicons.css";

const CoinsList = () => {
  const { coins } = useContext(CoinContext);
  console.log(coins);
  return (
    <>
      <div className="grid">
        <div className="col-12 text-center">
          <h3>Les Cryptomonnaies/ Cours des crypto-monnaies</h3>
        </div>
      </div>
      <div className="grid">
        <div className="col-12 mx-2">
          <DataTable
            value={coins}
            tableStyle={{ minWidth: "60rem" }}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
          >
            <Column field="rank" header="#"></Column>
            <Column
              field="nameid"
              body={({ nameid }) => (
                <img
                  src={`https://www.coinlore.com/img/50x50/${nameid}.png`}
                  alt="logo"
                />
              )}
            ></Column>
            <Column field="name" header="Devise"></Column>
            <Column field="price_usd" header="Cours"></Column>
            <Column
              field="percent_change_1h"
              header="1h"
              body={({ percent_change_1h }) => (
                <span
                  style={{
                    color: percent_change_1h >= 0 ? "green" : "red",
                  }}
                >
                  {percent_change_1h}
                </span>
              )}
            ></Column>
            <Column
              field="percent_change_24h"
              header="24h"
              body={({ percent_change_24h }) => (
                <span
                  style={{
                    color: percent_change_24h >= 0 ? "green" : "red",
                  }}
                >
                  {percent_change_24h}
                </span>
              )}
            ></Column>
            <Column
              field="percent_change_7d"
              header="7j"
              body={({ percent_change_7d }) => (
                <span
                  style={{
                    color: percent_change_7d >= 0 ? "green" : "red",
                  }}
                >
                  {percent_change_7d}
                </span>
              )}
            ></Column>
            <Column field="market_cap_usd" header="Market Cap"></Column>
            <Column field="volume24a" header="Volume 24h"></Column>
            <Column field="percent_change_7d" header="Change"></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default CoinsList;
