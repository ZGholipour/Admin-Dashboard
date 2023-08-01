import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Products.css";

export default function Products() {
  const [productData, setProductData] = useState(productRows);

  const productDelete = (productID) => {
    setProductData(productData.filter((product) => product.id != productID));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="" className="productLink">
            <div className="productListProduct">
              <img src={params.row.avatar} className="productListImg" />
              {params.row.name}
            </div>
          </Link>
        );
      },
    },
    { field: "status", headerName: "Status", width: 120 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="productLink">
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={productData}
        columns={columns}
        pageSize={4}
        disableRowSelectionOnClick
      />
    </div>
  );
}
