import React from "react";
import { PRODUCTS } from "../../database/products";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import "./thumbnailList.css";

const ThumbnailList = () => {
  return (
    <div>
      <div className="thumbnail-list">
        {PRODUCTS.map((product) => (
          <Thumbnail data={product} />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailList;
