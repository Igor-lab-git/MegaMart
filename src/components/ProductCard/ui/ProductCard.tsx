import { FC, useState } from "react";
import { Product } from "../../../types/index";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/ui/cartSlice";
import style from "./style.module.scss";
import Heart from "@react-sandbox/heart";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export const ProductCard: FC<Props> = ({ product }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product, quantity: 1 }));
  };

  return (
    <div className={style.wrapperCard}>
      <div className={style.heartWrapper}>
      <Heart
        className={style.heartIcon}
        width={20}
        height={20}
        active={active}
        onClick={() => setActive(!active)}
      />
      </div>
      <div className={style.wrapperDescription}>
       
        <Link className={style.titleCard} to={`/product/${product.id}`}>
         <img className={style.imgCart}src={product.imageUrl[0]}alt={product.title}/>{product.title}
         </Link>

        <p className={style.descriptionText}>{product.description}</p>
        <div className={style.priceWrapper}>
          <span className={style.priceDiscount}>499.00 ₽</span>
          <p className={style.price}> {product.price} ₽</p>
        </div>
      </div>
      <button className={style.button} onClick={addToCart}>
        Добавить в карзину
      </button>
    </div>
  );
};
