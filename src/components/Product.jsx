import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const {data:products} = useSelector((state) => state.product);
  // const [products, getProducts] = useState([]);
  useEffect(() => {
    /**
     * we have to dispatch an action for fetch products using the AsyncThunk
     */
    dispatch(getProducts());

    //api
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((res) => getProducts(res));
    //Above useState getProducts is using
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3" style={{ marginBottom: "10px" }}>
          <Card key={product.id} className="h-100">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "130px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR: {product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ background: "white" }}>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Add To Cart
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Product;
