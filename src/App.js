import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Welcome
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Technology</p>
                <a href="#" class="btn btn-primary">
                  Read Article
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Automobile</p>
                <a href="#" class="btn btn-primary">
                  Read Article
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Art</p>
                <a href="#" class="btn btn-primary">
                  Read Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
