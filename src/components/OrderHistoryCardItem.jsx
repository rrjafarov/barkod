// src/src/components/OrderHistoryCardItem.js
import Image from "next/image";
// import defaultImg from "@/public/defaultImage.webp";
import Link from "next/link";

const OrderHistoryCardItem = (props ) => {
  // props.product undefined ise güvenli fallback
  const wrapper = props.product || {};
  const data = wrapper.product || {};
  const imgSrc = data.image || defaultImg;  
  const name = data.name || "Mehsul adı yoxdur";
  const slug = data.slug || "";
  const price = data.price ?? "-";
  const qty = wrapper.qty ?? "-";

  return (
    <div className="orderHistoryMiniCard">
      <Link href={slug ? `/products/${slug}` : "#"}>
        <Image
          src={imgSrc}
          alt={name}
          width={5000}
          height={5000}
        />
      </Link>
      <div className="orderHistoryTitle">
        <strong>{name}</strong>
      </div>
      <div className="orderHistoryPart">
        {/* <span>{t?.price || "Qiymət"}</span> */}
        <p>{price}</p>
      </div>
      <div className="orderHistoryPart">
        {/* <span>{t?.quantity || "Say"}</span> */}
        <p>{qty}</p>
      </div>
    </div>
  );
};

export default OrderHistoryCardItem;
