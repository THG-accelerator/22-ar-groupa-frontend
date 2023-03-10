import { useParams } from "react-router-dom";

const ProductCard = () => {
  const { id } = useParams;
  return (
    <div>
      Single product card here:
      <h1>{id}</h1>
    </div>
  );
};

export default ProductCard;
