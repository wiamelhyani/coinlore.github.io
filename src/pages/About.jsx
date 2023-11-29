import React from "react";

const About = () => {
  return (
    <div>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>
                Coinlore provides independent cryptocurrency / coin prices
                calculated by its own algorithm, and other metrics such as
                markets, volumes, historical prices, charts, coin market caps,
                blockchain info, API, widgets, and more. We also gather
                additional information from different sources to ensure we cover
                all necessary data or events.
              </p>
              <p>
                CoinDepo is a unique provider that combines lending without a
                collateral account with the ability to earn interest on crypto.
                In this way, it functions a lot like a bank. It’s an important
                novelty for the world of decentralized finances because most
                crypto providers on the market don’t really have such mutually
                beneficial arrangements.
              </p>
              <p>
                ⚠Trading can be risky. If you are planning to trade crypto,
                please consult a financial adviser.
              </p>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7">
              <img
                src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/uwshxxjvwvq3oluyqona"
                alt="logo"
                style={{ height: "50vh", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
