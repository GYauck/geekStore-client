import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { fetchApi } from "../../config/axiosInstance";

const ProductsItem = ({ producto, setProducts }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    await fetchApi({
      method: "delete",
      url: `/api/products/deleteProduct/${producto.id}`,
    });
    const products = await fetchApi({
      method: "get",
      url: "/api/products/getAllProducts",
    });
    setProducts(products.data);
  };

  return (
    <>
      <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left whitespace-nowrap">
            <div className="flex items-center">
              <div className="mr-2"></div>
              <span className="font-medium">{producto.id}</span>
            </div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">
              <div className="mr-2 text-xl"> {producto.name} </div>
              <span></span>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex items-center justify-center">
              <span className="text-xl">
                {producto.brand ? producto.brand.name : ""}
              </span>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex items-center justify-center">
              <span className="text-xl">${producto.price}</span>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <span className="rounded-full text-xl ">{producto.stock}</span>
          </td>
          <td className="py-3 px-6 text-center flex justify-center">
            <img className="w-10 h-10" src={producto.image_URL}></img>
          </td>

          <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center">
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button onClick={() => setShowModal(true)}>
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button onClick={handleDelete}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
            </div>
          </td>
        </tr>
      </tbody>

      {/* popUp */}
      {showModal ? (
        <Modal
          producto={producto}
          setShowModal={setShowModal}
          setProducts={setProducts}
        />
      ) : null}
    </>
  );
};

export default ProductsItem;
