import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ProductsProvider from "../../context/ProductsProvider";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import { fetchApi } from "../../config/axiosInstance";

const ProductList = () => {
  const { products, setProducts } = useContext(ProductsProvider);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

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
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mb-48">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {currentPosts.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </div>
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default ProductList;
