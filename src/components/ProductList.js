import ProductCard from "./ProductCard";

function ProductList(props) {
  const filteredProd = props.Products.filter((products) => {
    if (products.description !== undefined && products.category !== undefined) {
      if (
        products.description
          .toLowerCase()
          .indexOf(props.newSearchText.toLowerCase()) > -1
      )
        if (
          products.description
            .toLowerCase()
            .indexOf(props.newSuggest.toLowerCase()) > -1
        )
          if (products.category.indexOf(props.newBtncategory) > -1) {
            return true;
          }
    }

    return false;
  });

  return filteredProd.map((products) => {
    return <ProductCard prod={products} />;
  });
}

export default ProductList;
