import { KeyboardEvent } from "react";
import { FormSection } from "./FormSection";
import "./input.css";
import "./otp-input.css";

export const OtpInput = () => {
  const handleOtpInput = (e: KeyboardEvent) => {
    e.preventDefault();
    const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const isDigit = DIGITS.includes(e.key);
    const focusedElement = e.currentTarget as HTMLInputElement;

    const focusedDigit = parseInt(focusedElement.id.slice(-1));
    if (e.key === "Backspace") {
      focusedElement.value = "";
      if (focusedDigit > 1) {
        document.getElementById(`otp-digit-${focusedDigit - 1}`)?.focus();
      }
    } else if (e.key === "ArrowLeft") {
      if (focusedDigit > 1) {
        document.getElementById(`otp-digit-${focusedDigit - 1}`)?.focus();
      }
    } else if (e.key === "ArrowRight" && focusedDigit < 4) {
      document.getElementById(`otp-digit-${focusedDigit + 1}`)?.focus();
    } else if (isDigit) {
      focusedElement.value = isDigit ? e.key : "";
      if (focusedDigit < 4) {
        document.getElementById(`otp-digit-${focusedDigit + 1}`)?.focus();
      }
    } else {
      /* do nothing */
    }
  };

  return (
    <FormSection label="Enter the OTP generated on your mobile phone">
      <div className="input-otp-digits-group input-container">
        <input
          onKeyDown={handleOtpInput}
          id="otp-digit-1"
          className="input-otp-digit p1"
          type="number"
        />
        <input
          onKeyDown={handleOtpInput}
          id="otp-digit-2"
          className="input-otp-digit p1"
          type="number"
        />
        <input
          onKeyDown={handleOtpInput}
          id="otp-digit-3"
          className="input-otp-digit p1"
          type="number"
        />
        <input
          onKeyDown={handleOtpInput}
          id="otp-digit-4"
          className="input-otp-digit p1"
          type="number"
        />
      </div>
    </FormSection>
  );
};
