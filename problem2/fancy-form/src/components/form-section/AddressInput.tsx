import { useEffect, useRef } from "react";
import { FormSection } from "./FormSection";
import "./input.css";

export const AddressInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const resizeInput = (e: Event) => {
      if (inputRef.current) {
        inputRef.current.style.width = inputRef.current.value.length + "ch";
      }
    };

    inputRef.current?.addEventListener("input", resizeInput);

    return () => {
      inputRef.current?.removeEventListener("input", resizeInput);
    };
  }, []);

  return (
    <FormSection label="Enter your ETH address">
      {/* In hexadecimal, two digits represent a byte, and so addresses contain 40 hexadecimal digits, e.g. 0xb794f5ea0ba39494ce839613fffba74279579268 */}
      <div className="input-container">
        <h2 className="h2">0x</h2>
        <input ref={inputRef} className="p2 user-input" maxLength={40} />
      </div>
    </FormSection>
  );
};
