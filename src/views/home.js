import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./styles/home.css";
import { getData } from "../api";
import { AutoComplete, Input, Card } from "antd";

const Homeview = () => {
  const { Meta } = Card;
  const searchResult = (data = [], query) =>
    data.map((item, idx) => {
      return {
        value: item.id,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{item.name}</span>
          </div>
        ),
      };
    });
  const [options, setOptions] = useState([]);
  const [details, setDetails] = useState({});
  const [resultShow, setResultShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const getOptions = async (value) => {
    let data = await getData(`/stocks/search?query=${value}`);
    let _results = searchResult(data, value);
    setOptions(_results);
  };

  const getDetails = async (id) => {
    setLoading(true);
    let data = await getData(`/stocks/details/${id}`);
    setLoading(false);
    setResultShow(true);
    console.log(data);
    setDetails(data);
  };
  const handleSearch = (value) => {
    getOptions(value);
    setQuery(value);
  };

  const onSelect = (value) => {
    getDetails(value);
  };

  return (
    <Container fluid className="main-content-container p-0 ">
      <div className="card shadow" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-sm-5 offset-md-4 mt-3">
            <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{ width: 300 }}
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
            >
              <Input.Search size="large" placeholder="input here" enterButton />
            </AutoComplete>
          </div>
        </div>
        {resultShow && (
          <div className="row mt-4">
            <div className="col-sm-12 ">
              <Card loading={loading}>
                <Meta title={details.name} />

                <div className="row mt-4">
                  <div className="col">
                    <ul class="list-group">
                      <li class="list-group-item active">
                        Market Cap{" "}
                        <span className="m-3 text-danger bold">
                          ₹{details.market_cap}
                        </span>
                      </li>
                      <li class="list-group-item ">
                        Current price
                        <span className="m-3 text-danger bold">
                          ₹{details.current_market_price}
                        </span>
                      </li>
                      <li class="list-group-item active">
                        Stock P/E
                        <span className="m-3 text-danger bold">
                          {details.stock_PE}%
                        </span>
                      </li>
                      <li class="list-group-item ">
                        Debt
                        <span className="m-3 text-danger bold">
                          ₹{details.debt}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul class="list-group">
                      <li class="list-group-item active">
                        Divident Yield{" "}
                        <span className="m-3 text-danger bold">
                          {details.dividend_yield}%
                        </span>
                      </li>
                      <li class="list-group-item ">
                        ROCE
                        <span className="m-3 text-danger bold">
                          {details.roce}%
                        </span>
                      </li>
                      <li class="list-group-item active">
                        ROE
                        <span className="m-3 text-danger bold">
                          {details.roe_previos_annum}%
                        </span>
                      </li>
                      <li class="list-group-item ">
                        Debt Equality
                        <span className="m-3 text-danger bold">
                          {details.debt_to_equity}%
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul class="list-group">
                      <li class="list-group-item active">
                        Eps{" "}
                        <span className="m-3 text-danger bold">
                          {details.eps}%
                        </span>
                      </li>
                      <li class="list-group-item ">
                        Reserves
                        <span className="m-3 text-danger bold">
                          ₹{details.reserves}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Homeview;
