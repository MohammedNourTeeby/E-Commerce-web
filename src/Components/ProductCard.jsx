import React from "react";

import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <card className="w-96" >
        <cardHeader color="blue" className="relative h-96">
          <img src={img} alt="img-blur-shadow" className="h-full w-full" />
        </cardHeader>
        <cardBody className="text-center">
          <typography variant="h5" className="mb-2">
            {name}
          </typography>
          <typography>{text}</typography>
        </cardBody>
        <cardFooter divider className="flex items-center justify-between py-3">
          <typography variant="small">{price}$</typography>
          <typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </typography>
        </cardFooter>
      </card>
    </Link>
  );
};

export default ProductCard;
