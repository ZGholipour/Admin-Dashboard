import React from "react";
import Chart from "../../components/Chart/Chart";
import { Link } from "react-router-dom";
import { productData } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";
import "./product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale In Month" data={productData} dataKey="sale" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="/images/npm.png" className="productInfoImg" />
            <span className="productName">LapTop</span>
          </div>
          <div className="productInfoButton">
            <div className="productInfoItem">
              <div className="productInfoKey">ID: </div>
              <div className="productInfoValue">123</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name: </div>
              <div className="productInfoValue">Laptop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales: </div>
              <div className="productInfoValue">9000$</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active:</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock:</div>
              <div className="productInfoValue">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label htmlFor="">Product Name:</label>
            <input type="text" placeholder="LapTop" />
            <label htmlFor="">In Stock</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="">Active</label>
            <select id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUploader">
              <img src="/images/npm.png" className="productUploadImg" />
              <label>
                <PublishIcon />
              </label>
              <input type="file" className="productUploadFile"/>
            </div>
            <button className="productButton">Upload(Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}
