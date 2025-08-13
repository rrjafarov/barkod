// src/src/components/UserAddressCard.js
import { FiCheck, FiX, FiEdit2 } from "react-icons/fi";
import {
  useDeleteAddressListMutation,
  useSelectPrimaryAddressMutation,
} from "@/redux/userService";

const UserAddressCard = ({ t, address, setActive, onEdit }) => {
  const [deleteAddressList, { isLoading: isDeleting }] =
    useDeleteAddressListMutation();
  const [selectPrimaryAddress, { isLoading: isSettingPrimary }] =
    useSelectPrimaryAddressMutation();

  const handlePrimaryChange = async () => {
    if (!address.is_main) {
      await selectPrimaryAddress(address.id);
    }
  };

  return (
    <div className="addressCard">
      <input
        type="radio"
        name="address"
        checked={address?.is_main}
        onChange={handlePrimaryChange}
        disabled={isSettingPrimary}
      />
      <div className="addressCardInner">
        <div className="tick">
          <FiCheck />
        </div>
        <div>
          <span>{t?.name || "Ad"}</span>
          <p>{address?.name}</p>
        </div>
        <div>
          <span>{t?.city || "City"}</span>
          <p>{address?.region}</p>
        </div>
        <div>
          <span>{t?.address || "Address"}</span>
          <p>{address?.address}</p>
        </div>
        <div>
          <span>{t?.num || "Number"}</span>
          <p>{address?.tel}</p>
        </div>
      </div>
      <button
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          deleteAddressList(address.id);
        }}
        disabled={isDeleting}
      >
        {isDeleting ? <div className="loader2"></div> : <FiX />}
      </button>
      <button
        className="edit"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(address);
        }}
      >
        <FiEdit2 />
      </button>
    </div>
  );
};

export default UserAddressCard;
