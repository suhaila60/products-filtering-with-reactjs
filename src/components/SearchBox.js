import "./SearchBox.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function SearchBox(props) {
  const [searchText, setSearchText] = useState("");

  const [autoFilter, setautoFilter] = useState([]);
  const [searchAutoSuggest, setsearchAutoSuggest] = useState("");

  function onChangeSearchText(event) {
    setSearchText(event.target.value);
    document.getElementById("auto-suggest-container").style.display = "flex";
    const filterByDescription = props.Products.filter((products) => {
      if (products.description != undefined) {
        if (
          products.description.toLowerCase().indexOf(searchText.toLowerCase()) >
          -1
        ) {
          return true;
        }
      }

      return false;
    });
    setautoFilter(filterByDescription);
  }

  const onClickAutoSuggest = (event) => {
    setsearchAutoSuggest(event.target.value);

    document.getElementById("inputBox").value = event.target.value;

    document.getElementById("auto-suggest-container").style.display = "none";
  };

  const onClickLense = () => {
    props.onSearchLensClick(searchText);
    props.onAutoSuggestClick(searchAutoSuggest);
    document.getElementById("auto-suggest-container").style.display = "none";
  };
  return (
    <>
      <div className="input-group ">
        <div className="dropdown ">
          <button
            className="btn  dropdown-toggle mb-5 drop-box "
            type="button"
            style={{
              borderRadius: "1px",
              backgroundColor: "rgb(241, 238, 238)",
              color: "black",
              height: "44px",
            }}
          >
            Dress
          </button>
        </div>

        <input
          type="text"
          id="inputBox"
          className="search-box mb-1"
          onChange={onChangeSearchText}
        />
        <a href="#" role="button">
          <img
            src="https://static.wixstatic.com/media/0fb5a9_445b543d68284ef5b6d6fc08c36fc68b~mv2.png/v1/fill/w_479,h_788,fp_0.50_0.50,q_90,enc_auto/0fb5a9_445b543d68284ef5b6d6fc08c36fc68b~mv2.png"
            width="40px"
            height=" 44px"
            onClick={onClickLense}
          />
        </a>
      </div>
      <div
        id="auto-suggest-container"
        className="flex-column justify-content-start align-items-start"
      >
        {autoFilter.map((products) => {
          return (
            <>
              <Button
                className="d-flex"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "15px",
                  width: "450px",
                }}
                variant="light"
                value={products.description}
                onClick={onClickAutoSuggest}
              >
                {products.description}
              </Button>

              <br />
            </>
          );
        })}
      </div>
    </>
  );
}
