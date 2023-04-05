import Card from "react-bootstrap/Card";
import "./ProductCard.css";
function ProductCard(props) {
  return (
    <Card
      style={{ width: "15rem" }}
      className="d-flex align-items-center mt-2 "
    >
      <div
        className="m-3  d-flex justify-content-center  "
        style={{ width: "10rem", height: "15rem" }}
      >
        <Card.Img
          variant="top"
          src={props.prod.imageUrl}
          className="card-img-top mb-1 card-img "
          style={{ width: "180px" }}
        />
      </div>
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title>{props.prod.title}</Card.Title>
        <span className="sponsered">
          {props.prod.sponsered}
          <img src={props.prod.sponsImg} width="13px" height="12px" />
        </span>
        <Card.Text className="text-center ">{props.prod.description}</Card.Text>

        <div className="mb-2">
          {" "}
          <img src={props.prod.starImgUrl} width="100px;" height="23px" />
          <span style={{ color: "rgb(33, 120, 160)", fontSize: "small" }}>
            {props.prod.starRating}
          </span>
        </div>
        {props.prod.limiteBox}
        <div className="prize-line text-center">
          <span style={{ fontSize: "13px", paddingBottom: " 6px" }}>
            {props.prod.priceIcon}
          </span>
          <span style={{ fontSize: "32px" }}>{props.prod.price}</span>
          <div
            className=""
            style={{ fontSize: "13px", color: "rgb(97, 92, 92)   " }}
          >
            <strike>{props.prod.priceStrike}</strike>
          </div>
          <span className=""> {props.prod.offer}</span>
        </div>
        <div className="text-center" style={{ fontSize: "13px" }}>
          <img
            className="mb-2"
            src={props.prod.primeImage}
            width="50px"
            height="25px"
          />
          <span>{props.prod.getIt}</span>{" "}
          <span className="fw-bold">{props.prod.deliverDate} </span>
        </div>
        <span>{props.prod.freeDelivery}</span>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
