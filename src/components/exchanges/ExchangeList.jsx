import React, { useContext } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExchangeContext from "../contexts/ExchangeContext";
const ExchangeList = () => {
  
  const { exchange } = useContext(ExchangeContext);
  return (
    <div>
      <div className="col-12 text-center">
        <h3 className="container">Top Crypto Exchanges By 24 Hour Volume</h3>
      </div>
      <div className="card">
        <DataTable
          value={exchange}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="id" header="#"></Column>
          <Column
            field="name_id"
            body={({ name_id }) => (
              <img
                src={`https://c1.coinlore.com/img/exchanges/25x25/${name_id}.png`}
                alt="logo"
              />
            )}
          ></Column>
          <Column field="name" header="Name"></Column>
          <Column field="active_pairs" header="Active"></Column>
          <Column
            field="country"
            header="Country"
            style={{ width: "25%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default ExchangeList;
