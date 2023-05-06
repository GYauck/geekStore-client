import { useState } from "react";
import ProductDetail from "./ProductDetail";

const ProductItem = ({ product }) => {
  const [openProductDetail, setOpenProductDetail] = useState(false);

  return (
    <>
      <a
        key={product.id}
        className="group"
        onClick={() => setOpenProductDetail(true)}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={product.image_URL}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700 flex justify-between">
          {product.name} <img className="h-10 " src={product.brand.logo_URL} />
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price}
        </p>
      </a>
      {openProductDetail && (
        <ProductDetail
          open={openProductDetail}
          product={product}
          onClose={() => setOpenProductDetail(false)}
        />
      )}
    </>
  );
};

export default ProductItem;
