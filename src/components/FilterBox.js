import Nav from "react-bootstrap/Nav";


import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";

function FilterBox(props) {
  return (
    <div>
      <CategoryFilter onButtonCategory={props.onButtonCategory} />

      <div className="mt-2">
        <h6 className="fw-bold"> Customer Review</h6>
        <div className="d-flex">
          <img
            src="https://cdn.pixabay.com/photo/2020/04/26/11/56/amazon-stars-5094895_1280.png"
            width="110px"
            height="100px"
          />
          <div style={{ fontSize: "14px" }}>
            {" "}
            &up
            <br />
            &up
            <br />
            &up
            <br />
            &up
            <br />
            &up
            <br />
          </div>
        </div>
      </div>

      <BrandFilter />

      <ColorFilter />

      <div>
        <h6 className="fw-bold">Price</h6>
        <Nav.Link href="">Under ₹1,000</Nav.Link>
        <Nav.Link href=""> ₹1,000 - ₹2,000</Nav.Link>
        <Nav.Link href="">Over ₹2,000</Nav.Link>
      </div>

      <div className="d-flex mt-2 ">
        <input
          className="me-2"
          type="text"
          placeholder="Min"
          style={{ width: "60px" }}
        />
        <input
          className="me-2"
          type="text"
          placeholder="Max"
          style={{ width: "60px" }}
        />
        <button
          style={{ width: "50px" }}
          className="btn btn-outline-secondary"
          type="button"
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default FilterBox;
