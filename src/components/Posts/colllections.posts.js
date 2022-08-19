import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonGroup } from "react-bootstrap";
import Loaders from "../Utils/loaders";
import Modals from "../Utils/modal";
import './collections.posts.css';

const Collections = () => {
  // {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  // }

  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_POSTURL}/?_limit=${limit}`,
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
  const url = process.env.REACT_APP_POSTURL;
  return (
    <div>
      <h1>Posts API</h1>
      <p>
        Fetching iamage API from <a href={url}>{url}</a>
      </p>
      <p className="limit">Currently showing <bold>{limit}</bold></p>
      {datas.map((data, i) => {
        return (
          <div key={i} className="">
            <Modals
              title={data.title}
              description={data.body}
              id={data.id}
            />
          </div>
        );
      })}
      <ButtonGroup className="d-flex justify-content-center align-items-center m-2">
        {limit > 1 ? (
          <button
            className="btn btn-danger"
            onClick={() => handleLimit("-")}
          >
            -
          </button>
        ) : (
          ""
        )}
        <button
          className="btn btn-primary"
          onClick={() => handleLimit("+")}
        >
          +
        </button>
      </ButtonGroup>
    </div>
  );
};

export default Collections;
