import React, { useEffect, useState } from "react";
import { getExchanges } from "../services/ExchangeService";
import ExchangeContext from "../components/contexts/ExchangeContext";
import ExchangeList from "../components/exchanges/ExchangeList";
import ExchangeGrid from "../components/exchanges/ExchangeGrid";
 
const Exchanges = () => {
  const [exchange, setExchange] = useState([]);
  const [layout, setLayout] = useState("list");
  useEffect(() => {
    getExchanges()
      .then(({ data }) => {
        setExchange(Object.entries(data).map(([, value]) => value));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ExchangeContext.Provider value={{ exchange }}>
        <div className="container">
          <div className="text-end mt-5">
            <button onClick={() => setLayout("list")}>
              <i className="pi pi-list" />
            </button>
            <button onClick={() => setLayout("grid")}>
              <i className="pi pi-th-large" />
            </button>
          </div>
          {layout === "list" ? <ExchangeList /> : <ExchangeGrid />}
        </div>
      </ExchangeContext.Provider>
    </div>
  );
};

export default Exchanges;
