import React, { useEffect, useState } from "react";
import { getTickers } from "../services/CoinService";
import CoinsList from "../components/coins/CoinsList";
import CoinContext from "../components/contexts/CoinContext";
import CoinsGrid from "../components/coins/CoinsGrid";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [layout, setLayout] = useState("list");
  console.log(coins);

  useEffect(() => {
    getTickers()
      .then(({ data }) => setCoins(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CoinContext.Provider value={{ coins }}>
        <div className="container">
          <div className="text-end mt-5">
            <button onClick={() => setLayout("list")}>
              <i className="pi pi-list" />
            </button>
            <button onClick={() => setLayout("grid")}>
              <i className="pi pi-th-large" />
            </button>
          </div>
          {layout === "list" ? <CoinsList /> : <CoinsGrid />}
        </div>
      </CoinContext.Provider>
    </>
  );
};

export default Coins;
