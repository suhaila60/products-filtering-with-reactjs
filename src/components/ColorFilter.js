import Form from "react-bootstrap/Form";

export default function ColorFilter(props) {
  return (
    <div className="mt-2">
      <h6 className="fw-bold">Color</h6>

      <Form.Check.Input
        className="me-2 "
        value={"red"}
        type={"checkbox"}
        sValid
        style={{ height: "18px", width: "18px", backgroundColor: "red" }}
      />

      <Form.Check.Input
        className="me-2"
        value={"green"}
        type={"checkbox"}
        sValid
        style={{ height: "18px", width: "18px", backgroundColor: "green" }}
      />

      <Form.Check.Input
        className="me-2"
        value={"black"}
        type={"checkbox"}
        sValid
        style={{ height: "18px", width: "18px", backgroundColor: "black" }}
      />

      <Form.Check.Input
        className="me-2"
        value={"yellow"}
        type={"checkbox"}
        sValid
        style={{ height: "18px", width: "18px", backgroundColor: "yellow" }}
      />
      <br />
    </div>
  );
}
