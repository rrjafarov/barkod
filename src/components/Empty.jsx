import Image from "next/image";
import Link from "next/link";

const Empty = ({
  title,
  icon,
  description,
  link,
  buttonText,
  isButtonTrue,
}) => {
  return (
    <div className="emptySection">
      {/* <Image
        className={icon}
        src={"/"}
        width={500}
        height={500}
        alt="empty logo"
      /> */}
      <span className="empty-title">{title}</span>
      <p>{description}</p>
      {isButtonTrue && (
        <Link href={link} className="backButton">
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Empty;