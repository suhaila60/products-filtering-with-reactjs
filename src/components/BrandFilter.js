import Form from "react-bootstrap/Form";
export default function BrandFilter(props) {
  const brandStyle = { height: "18px", width: "18px" };
  const BrandName = ["Generic", "NEW4U", "VASTRAMAY", "TIGERSNAKE"];

  return (
    <div className="mt-2">
      <h6 className="fw-bold">Brand</h6>
      {BrandName.map((brand) => {
        return (
          <>
            <Form.Check.Input
              className="me-2"
              value={brand}
              type={"checkbox"}
              sValid
              style={brandStyle}
            />
            <Form.Check.Label>{brand}</Form.Check.Label>
            <br />
          </>
        );
      })}
    </div>
  );
}
