import React from "react";
import ProductCard from "./ProductCard.jsx";
import Heading from "./Heading.jsx";

const ProductList = ({ data, title, subtitle, mt, mb }) => {
  return (
    <div className="lg:container">
      {/* Header Section */}
      <Heading title={title} subtitle={subtitle} />
      <div style={{ marginTop: mt, marginBottom: mb }}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-8 place-items-center">
          {data?.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
