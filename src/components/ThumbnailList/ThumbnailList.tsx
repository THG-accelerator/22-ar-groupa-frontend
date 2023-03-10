import { Link } from "react-router-dom";
import { PRODUCTS } from "../../database/products";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import "./thumbnailList.css";

const ThumbnailList = () => {
  return (
    <div>
      <div className="thumbnail-list">
        {PRODUCTS.map((product) => (
          // <Link to="/" key={product.id}>
          <Thumbnail data={product} />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailList;
