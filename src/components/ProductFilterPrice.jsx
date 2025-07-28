import { useState, useEffect } from "react";
import { Slider } from "@nextui-org/slider";
import { useTranslations } from "next-intl";
import FilterBox from "@/src/components/FilterBox";

const ProductFilterPrice = ({ priceData, slug }) => {
  const max = priceData && Number(priceData?.max);
  const min = priceData && Number(priceData?.min);
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState(false);
  const [priceRange, setPriceRange] = useState([min, max]);
  const [showPriceFilter, setShowPriceFilter] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialMin = urlParams.get("min_price") || min;
    const initialMax = urlParams.get("max_price") || max;
    setPriceRange([Number(initialMin), Number(initialMax)]);
    setShowPriceFilter(
      urlParams.has("min_price") && urlParams.has("max_price")
    );
  }, [slug, min, max]);

  const handleSliderChange = (values) => {
    setPriceRange(values);
  };

  const handleButtonClick = () => {
    const [minPrice, maxPrice] = priceRange;
    const url = new URL(window.location);
    url.searchParams.set("min_price", minPrice);
    url.searchParams.set("max_price", maxPrice);
    window.history.pushState({}, "", url);
    setShowPriceFilter(true);
  };

  const handleRemovePriceFilter = () => {
    const url = new URL(window.location);
    url.searchParams.delete("min_price");
    url.searchParams.delete("max_price");
    window.history.pushState({}, "", url);
    setShowPriceFilter(false);
    setPriceRange([min, max]);
  };

  return (
    <div className="filterCard">
      <div
        className={`filterCardHeader ${activeTab ? "active" : ""}`}
        onClick={() => setActiveTab((prev) => !prev)}
      >
        <span>{t("price")}</span>
      </div>
      <div
        className="filterCardBody"
        style={{ display: activeTab ? "block" : "none" }}
      >
        <Slider
          label={t("price-range")}
          color="danger"
          size="md"
          minValue={min}
          maxValue={max}
          value={priceRange}
          formatOptions={{
            style: "currency",
            currency: "AZN",
            minimumFractionDigits: 0,
          }}
          tooltipValueFormatOptions={{ style: "currency", currency: "AZN" }}
          className="priceRange w-full"
          onChange={handleSliderChange}
        />
        <button className="blackButton" onClick={handleButtonClick}>
          {t("search")}
        </button>
      </div>
      <div className="filterBoxSection">
        {showPriceFilter && (
          <FilterBox
            handleRemoveFilter={handleRemovePriceFilter}
            filter={`${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(
              2
            )} AZN`}
          />
        )}
      </div>
    </div>
  );
};

export default ProductFilterPrice;