import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../../features/ui/productsSlice";
import { AppDispatch, RootState } from "../../../features/store";
import { ProductCard } from "../../../components/ProductCard/index";
import { Product } from "../../../types";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import ImageSlider from "../../../components/BannerSlider/ui/ImageSlider";
import homeBaner from "../../../../public/img/homePage/homeBaner.png";
import { PromoBanners } from "../../../components/PromoBanners";
import { BrandFilter } from "../../../components/BrandFilter";
import { SearchBar } from "../../../components/SearchBar";

const ITEMS_PER_PAGE = 16;

export const HomePage = (): React.JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedBrand, setSelectedBrand] = useState<string>("Все");

  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsAsync() as ReturnType<typeof fetchProductsAsync>);
  }, [dispatch]);

  const brands = ["Все", ...new Set(products.map((p) => p.brand))];

  const filteredProducts = products.filter((product) => {
    const matchesBrand =
      selectedBrand === "Все" || product.brand === selectedBrand;
    const matchesName = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesBrand && matchesName;
  });

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const handleBrandClick = (brand: string) => {
    console.log(brand);
    setSelectedBrand(brand);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, filteredProducts.length)
    );
  };

  if (loading) return <p>Загрузка товаров...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <ImageSlider />
      <div className={style.wrapperHomePage}>
        <div className={style.inputWrapper}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            onReset={() => setSearchTerm("")}
          />
        </div>
        <BrandFilter
          brands={brands}
          selectedBrand={selectedBrand}
          onBrandSelect={handleBrandClick}
        />
        <img className={style.homeBaner} src={homeBaner} alt="homeBaner" />
        <section className={style.wrapperCard}>
          <PromoBanners />
          <div className={style.cardsWrapper}>
            {filteredProducts.length === 0 && (
              <div>
                <h2 className={style.titleSerchNot}>Такого товар нет 😕</h2>
              </div>
            )}
            {visibleProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <div className={style.wrapperBtnShowMore}>
          {visibleCount < filteredProducts.length && (
            <button className={style.btnShowMore} onClick={handleLoadMore}>
              Показать ещё
            </button>
          )}
        </div>
      </div>
    </>
  );
};
