import { useEffect, useRef } from "react";
import { FormSection } from "./FormSection";
import "./input.css";

export const AmountInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const pretiffyNumber = (num: string) => {
      return dePretiffyNumber(num).replace(/\d(?=(?:\d{3})+$)/g, "$&,");
    };
    const dePretiffyNumber = (num: string) => {
      return num.replace(/\,/g, "");
    };

    const resizeInput = (e: Event) => {
      if (inputRef.current) {
        inputRef.current.value = pretiffyNumber(inputRef.current.value);
        inputRef.current.style.width = inputRef.current.value.length + "ch";
      }
    };

    inputRef.current?.addEventListener("input", resizeInput);

    return () => {
      inputRef.current?.removeEventListener("input", resizeInput);
    };
  }, []);

  return (
    <FormSection label="Enter your amount to send">
      <div className="input-container">
        <h2 className="h2">ETH</h2>
        <input ref={inputRef} className="p2 user-input" type="text" />
      </div>
    </FormSection>
  );
};
