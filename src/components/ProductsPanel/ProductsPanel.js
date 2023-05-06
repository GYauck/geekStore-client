import React, { useContext, useEffect, useState } from "react";
import ProductsProvider from "../../context/ProductsProvider";
import ProductsItem from "./ProductsItem";
import AddModal from "./AddModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { fetchApi } from "../../config/axiosInstance";

const ProductsPanel = () => {
  const [showModal2, setShowModal2] = useState(false);
  const { products, setProducts } = useContext(ProductsProvider);

  async function fetchData() {
    const fetchedProducts = await fetchApi({
      method: "get",
      url: "/api/products/getAllProducts",
    });
    setProducts(fetchedProducts.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="overflow-x-auto ">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">NAME</th>
                    <th className="py-3 px-6 text-center">BRAND</th>
                    <th className="py-3 px-6 text-center">PRICE</th>
                    <th className="py-3 px-6 text-center">STOCK</th>
                    <th className="py-3 px-6 text-center">IMAGE</th>
                    <th className="py-3 px-6 text-center">MODIFY</th>
                    <th className="py-3 px-6 text-center">
                      <button onClick={() => setShowModal2(true)}>
                        <FontAwesomeIcon
                          style={{ height: "20px" }}
                          icon={faPlus}
                        />
                      </button>
                    </th>
                  </tr>
                </thead>
                {products?.map((producto, i) => (
                  <ProductsItem
                    key={i}
                    producto={producto}
                    setProducts={setProducts}
                  ></ProductsItem>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      {showModal2 ? (
        <AddModal setShowModal={setShowModal2} setProducts={setProducts} />
      ) : null}
    </>
  );
};

export default ProductsPanel;
