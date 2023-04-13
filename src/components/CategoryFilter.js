
export default function CategoryFilter(props) {
  const categoryButtonStyle = {
    color: "black",
    textDecoration: "none",
    width: "80px",
    
    
  };

  const onClickCategoryBtn = (event) => {
    props.onButtonCategory(event.target.value);
  };
  return (
    <div className="d-flex flex-column">
      <h6 className="fw-bold ">Category</h6>
      <input type="radio" className="btn-check   " name="btnradio" id="btnradio1" autocomplete="off"  value={"women"}  onClick={onClickCategoryBtn} />
  <label class="btn btn-outline-success btn-link mb-1" for="btnradio1" style={categoryButtonStyle}> women</label>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"   value={"male"}   onClick={onClickCategoryBtn}/>
  <label class="btn btn-outline-success btn-link" for="btnradio2"  style={categoryButtonStyle} >  men</label>

     
    </div>
  );
}
