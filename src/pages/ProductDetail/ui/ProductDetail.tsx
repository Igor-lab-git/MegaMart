import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../../features/ui/cartSlice";
import { StarRating } from "../../../components/StarRating";
import { fetchProductsAsync } from "../../../features/ui/productsSlice";
import { AppDispatch, RootState } from "../../../features/store";
import { NewComment } from "../../../components/NewComment";
import { ProductsDetailSlider } from "../../../components/ProductsDetailSlider";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import style from "./style.module.scss";

export const ProductDetail = (): React.JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsAsync() as ReturnType<typeof fetchProductsAsync>);
  }, [dispatch]);

  if (loading) return <p>Загрузка товаров...</p>;
  if (error) return <p>Error: {error}</p>;

  const product = products.find((p) => p.id === Number(id));

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem({ product, quantity: 1 }));
    }
  };
  if (!product) {
    return <p>Товар не найден</p>;
  }

  return (
    <div className={style.wrapperMain}>
      <Breadcrumbs
        currentPage={product.title}
        showBackButton={true}
        backButtonText="Назад"
        homeButtonText="Главная"
      />
      <div className={style.wrapperCardDetail}>
        <div className={style.wrapperImg}>
          <img
            className={style.img}
            src={product?.imageUrl[0]}
            alt={product?.title}
          />
          <ProductsDetailSlider images={product?.imageUrl} />
        </div>
        <div className={style.wrapperCardContent}>
          <span className={style.title}>{product?.title}</span>
          <p className={style.textDescription}>{product?.inDetail}</p>
          <div className={style.wrapperBtn}>
            <span className={style.price}>{product?.price} ₽</span>
            <button className={style.btnAdd} onClick={handleAddToCart}>
              Добавить в карзину
            </button>
          </div>
          <StarRating />
        </div>
      </div>
      <NewComment />
    </div>
  );
};
