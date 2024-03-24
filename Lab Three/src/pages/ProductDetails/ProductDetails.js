import { useLocation } from "react-router-dom";
import "./ProductDetails.css";
import { Fragment } from "react";
const ProductDetails = () => {
  const location = useLocation();
  const productdetails = location.state?.product;
  console.log(location.state.product);
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={productdetails.images[0]} alt="product" />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src={productdetails.images[1]} alt="product" />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <img src={productdetails.images[0]} alt="productdetails" />
                  </li>

                  <li>
                    <a href="##" data-toggle="tab">
                      <img
                        src={productdetails.images[1]}
                        alt="productdetails"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="##" data-toggle="tab">
                      <img
                        src={productdetails.images[2]}
                        alt="productdetails"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="##" data-toggle="tab">
                      <img src={productdetails.images[3]} alt="productdetails" />
                    </a>
                  </li>
                  <li>
                    {/*   <a data-target="#pic-2" data-toggle="tab">
                      <img src={productdetails.image[4]} />
                    </a> */}
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="productdetails-title">{productdetails.title}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">
                  {productdetails.description}
                </p>
                <h4 className="price">
                  current price: <span>{productdetails.price * 55} EGP</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this productdetails!{" "}
                  <strong>(87 votes)</strong>
                </p>
                <h5 className="sizes">
                  Category:
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    {productdetails.category}
                  </span>
                </h5>
                <h5 className="colors">
                  colors:
                  <span
                    className="color orange not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  ></span>
                  <span className="color green"></span>
                  <span className="color blue"></span>
                </h5>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">
                    add to cart
                  </button>
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
