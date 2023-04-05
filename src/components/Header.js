import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import SearchBox from "./SearchBox";

function Header(props) {
  return (
    <>
      <Navbar
        sticky="top"
        bg="black"
        className="d-flex justify-content-evenly nav-container "
      >
        <div className="d-flex " style={{ width: "312px" }}>
          <Navbar.Brand href="#home ">
            <img src="./images/brand image.png" width="120px" height="50px" />
          </Navbar.Brand>
          <Nav.Link className="btn   " href="#" role="button">
            <div className="d-flex flex-column loc-div me-3 text-start ">
              <span className="ms-4">Hello</span>
              <span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAV4kJ4GAbvj8GGOX6fScHwxkBXtd1QnohQd4KIWfZwbqZZWi4giwuSn0Dvs2kAr_jKGo&usqp=CAU"
                  height="20px"
                />
                <span className="fw-bold ms-1"> select your address</span>
              </span>
            </div>
          </Nav.Link>
        </div>

        <div className="d-flex">
          <Nav className="me-auto ">
            <div
              className=" bg-black mt-2 "
              style={{ height: " 44px", width: "552px" }}
            >
              <SearchBox
                onSearchLensClick={props.onSearchLensClick}
                Products={props.Products}
                newSearchText={props.newSearchText}
                onAutoSuggestClick={props.onAutoSuggestClick}
              />
            </div>
            <div className="link-btn d-flex">
              <a href="#home" className=" btn  ms-2 " role="button">
                <span class="dropdown-toggle ms-1 ">EN</span>
              </a>
              <a href="" className="btn  " role="button">
                <span style={{ fontSize: "12px" }}>Hello, sign in </span>
                <br />
                <span className="fw-bold">Account & Lists</span>
              </a>
              <a className="btn " href="#" role="button">
                <span style={{ fontSize: "12px" }}>Returns </span>
                <br />
                <span style={{ fontSize: "13px" }} className="fw-bold">
                  {" "}
                  & Orders
                </span>
              </a>
              <a class=" btn " href="#" role="button">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFcv04SYCl4awaUKXHv4dLX04zrLEAzuIBW9epulpKmjdEIblPQApzI9EIibLNqyRm3U&usqp=CAU"
                  width="30px "
                />
                <span className="fw-bold">cart</span>
              </a>
            </div>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
