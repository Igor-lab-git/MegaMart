import React from "react";
import style from "./style.module.scss";

interface BrandFilterProps {
  brands: string[];
  selectedBrand: string;
  onBrandSelect: (brand: string) => void;
}

export const BrandFilter = ({
  brands,
  selectedBrand,
  onBrandSelect,
}: BrandFilterProps): React.JSX.Element => (
  <div className={style.wrapperBrandFilter}>
    {brands.map((brand) => (
      <button
        key={brand}
        onClick={() => onBrandSelect(brand)}
        className={`${style.brand} ${
          selectedBrand === brand ? style.brandActive : ""
        }`}
      >
        {brand}
      </button>
    ))}
  </div>
);
