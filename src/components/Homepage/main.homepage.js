import { Fragment } from "react";
import "./main.homepage.css";

const Homepage = () => {
  return (
    <Fragment>
      <div clasName="roothome">
        {/* Make the homepage good */}
        <h1>React Fetching API</h1>
        <p>This project is from course by dea afrizal</p>
        {/* Make the list of assignment */}
        {/* 
        API POSTS: https://jsonplaceholder.typicode.com/posts 
        1. routing url
        posts dengan isian component dari API Posts diatas (dengan data: title
        saja) 
        2. modif UI Homepage 
        3. validasi active navigation bar
        4. ketika
        posts title di klik, munculkan popup modal deskripsi detail dari API
        tersebut dari title dan body) 
        5. kreatifitas UI masing2 
        */}
        <ol class="list-group list-group-light list-group-numbered tugas">
          <h3>Tugas</h3>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">
                Routing url posts dengan isian component dari API Posts diatas
                (dengan data: title saja){" "}
              </div>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Modif UI Homepage</div>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Validasi active navigation bar</div>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">
                Ketika posts title di klik, munculkan popup modal deskripsi
                detail dari API tersebut dari title dan body
              </div>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Kreatifitas UI masing-masing</div>
            </div>
          </li>
        </ol>
      </div>
    </Fragment>
  );
};

export default Homepage;
