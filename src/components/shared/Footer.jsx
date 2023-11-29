import React from "react";

const Footer = () => {
  return (
    <footer className="border-top" style={{ backgroundColor: "#383a3b" }}>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <ul className="list-inline text-center">
              <li className="list-inline-item">
                <a href="/">
                  <i
                    className="pi pi-twitter"
                    style={{ color: "white", margin: "10px", fontSize: "2rem" }}
                  ></i>
                </a>
                <a href="/">
                  <i
                    className="pi pi-linkedin"
                    style={{ color: "white", margin: "10px", fontSize: "2rem" }}
                  ></i>
                </a>
                <a href="/">
                  <i
                    className="pi pi-instagram"
                    style={{ color: "white", margin: "10px", fontSize: "2rem" }}
                  ></i>
                </a>
              </li>
            </ul>
            <div className="small text-center text-muted fst-italic">
              Copyright &copy; Your Website 2023
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
