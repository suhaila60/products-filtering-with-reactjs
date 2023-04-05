import Button from "react-bootstrap/Button";

export default function CategoryFilter(props) {
  const categoryButtonStyle = {
    color: "black",
    textDecoration: "none",
  };

  const onClickCategoryBtn = (event) => {
    props.onButtonCategory(event.target.value);
  };
  return (
    <div>
      <h6 className="fw-bold ">Category</h6>
      <Button
        className="categoryButton"
        style={categoryButtonStyle}
        variant="link"
        value={"women"}
        onClick={onClickCategoryBtn}
      >
        women
      </Button>
      <br />
      <Button
        className="categoryButton"
        style={categoryButtonStyle}
        variant="link"
        value={"male"}
        onClick={onClickCategoryBtn}
      >
        men
      </Button>
    </div>
  );
}
