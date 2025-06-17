
"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export default function GuestUUIDProvider() {
  useEffect(() => {
    let guestUUID = Cookies.get("guest_uuid");
    if (!guestUUID) {
      guestUUID = uuidv4();
      Cookies.set("guest_uuid", guestUUID);
    }
  }, []);

  return null;
}