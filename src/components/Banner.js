import Card from "react-bootstrap/Card";

function Banner() {
  function dealBox() {
    return (
      <div className="red-box ">
        <div> Deal of the day </div>
      </div>
    );
  }
  const bannerProd = [
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/71Sy4N4uxhS._AC_SR230,210_QL70_.jpg",
      deal: dealBox(),
      priceIcon: "₹",
      price: 5999,
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",
      getIt: "Get it",
      priceStrike: "₹1,999",
      offer: " (83% off)",
    },
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/71F9sYTKmHS._AC_SR230,210_QL70_.jpg",
      deal: dealBox(),
      priceIcon: "₹",
      price: 5999,
      primeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjfWGswgixRoqLA6FKK4mkxJgidKqB4SMW3GUrE02xrjvG8UvEH4OYkQ-52lemKxX16U&usqp=CAU",
      getIt: "Get it",
      priceStrike: "₹1,999",
      offer: " (83% off)",
    },
  ];
  const CardStyle = {
    width: "10rem",
    height: "219px",
    marginRight: "10px",
    backgroundColor: "#f9f7fa",
    borderRadius: "0px",
  };
  return bannerProd.map((p) => {
    return (
      <Card style={CardStyle}>
        <div
          className="m-3  d-flex justify-content-center"
          style={{ height: "100px", width: "100px" }}
        >
          <Card.Img variant="top" src={p.imageUrl} height="98px" />
        </div>
        <Card.Body>
          {p.deal}
          <div>
            <span style={{ fontSize: "13px", paddingBottom: " 6px" }}>
              {p.priceIcon}
            </span>
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>
              {p.price}
            </span>
            <img
              className="mb-2"
              src={p.primeImage}
              width="40px"
              height="15px"
            />
            <div style={{ fontSize: "13px", color: "rgb(97, 92, 92)" }}>
              <strike>{p.priceStrike}</strike>
              <span> {p.offer}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  });
}
export default Banner;
