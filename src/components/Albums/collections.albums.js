import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { ButtonGroup } from "react-bootstrap";
import Loaders from "../Utils/loaders";
import './collections.albums.css';

const Collections = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}photos?_limit=${limit}`,
      })
        .then((result) => {
          setDatas(result.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleLimit = (e) => {
    e === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      {/* <h3>{limit} Collection</h3> */}
      <h1>Albums API</h1>
      <p>Fetching iamage API from <a href={process.env.REACT_APP_BASEURL}>{process.env.REACT_APP_BASEURL}</a></p>
      <p>Currently showing <span className="fw-bold">{limit}</span></p>
      <ButtonGroup className="d-flex justify-content-center align-items-center m-2">
      {limit > 1 ? (
          <button
            className="btn btn-outline-danger"
            onClick={() => handleLimit("-")}
          >
            -
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-outline-primary"
          onClick={() => handleLimit("+")}
        >
          +
        </button>
      </ButtonGroup>
      <Carousel>
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 carousel-img"
                src={data.url}
                alt="img"
              />
              <Carousel.Caption>
                <h1>{data.id}</h1>
                <h3>{data.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={datas[0].thumbnailUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{datas.title}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center m-2">
      {limit > 1 ? (
          <button
            className="btn btn-outline-danger"
            onClick={() => handleLimit("-")}
          >
            -
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-outline-primary"
          onClick={() => handleLimit("+")}
        >
          +
        </button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Collections;
