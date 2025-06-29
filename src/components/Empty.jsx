import Image from "next/image";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";


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
      <RiFileList3Line className="empty-title-icon" />
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