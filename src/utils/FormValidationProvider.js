"use client";
import { useEffect } from "react";

export default function FormValidationProvider({ t }) {
  useEffect(() => {
    if (!t || Object.keys(t).length === 0) return;

    const inputs = document.querySelectorAll("input[required], textarea[required], select[required]");

    inputs.forEach((input) => {
      input.oninvalid = (e) => {
        e.target.setCustomValidity(t?.fillfieldtr || "Please fill out this field");
      };
      input.oninput = (e) => {
        e.target.setCustomValidity("");
      };
    });
  }, [t]);

  return null; // heç nə render eləmir
}
