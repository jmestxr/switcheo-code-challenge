import { useEffect, useRef, useState } from "react";
import "./App.css";
import { NavButton } from "./components/buttons/NavButton";
import { AddressInput } from "./components/form-section/AddressInput";
import { AmountInput } from "./components/form-section/AmountInput";
import { OtpInput } from "./components/form-section/OtpInput";

const NUM_SCREENS = 3;

function App() {
  const appRef = useRef<HTMLDivElement | null>(null);
  const [appHeight, setAppHeight] = useState(0);

  const formRef = useRef<HTMLFormElement | null>(null);
  const [formWidth, setFormWidth] = useState(0);

  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    if (appRef.current) {
      setAppHeight(appRef.current.clientHeight);
    }
  }, [appRef.current]);

  useEffect(() => {
    if (formRef.current) {
      setFormWidth(formRef.current.clientWidth);
    }
  }, [formRef.current]);

  useEffect(() => {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    if (prevButton) {
      prevButton.style.position = "absolute";
      prevButton.style.top = appHeight / 2 - prevButton.clientHeight / 2 + "px";
      prevButton.style.left = "50px";
    }
    if (nextButton) {
      nextButton.style.position = "absolute";
      nextButton.style.top = appHeight / 2 - nextButton.clientHeight / 2 + "px";
      nextButton.style.right = "50px";
    }
  });

  const handleGoBack = () => {
    if (formRef.current) {
      console.log(formRef.current.scrollLeft - formWidth)
      const newScrollPosition = formRef.current.scrollLeft - formWidth;
      formRef.current.scrollLeft = newScrollPosition;
    }
  };

  const handleGoNext = () => {
    if (formRef.current) {
      const newScrollPosition = formRef.current.scrollLeft + formWidth;
      formRef.current.scrollLeft = newScrollPosition;
    }
  };

  const handleOnScroll = () => {
    if (formRef.current) {
      const newScrollPosition = formRef.current.scrollLeft;

      if (newScrollPosition >= formWidth) setShowBackButton(true);
      else setShowBackButton(false);

      if (newScrollPosition < formWidth * (NUM_SCREENS - 1)) {
        setShowNextButton(true);
      } else {
        setShowNextButton(false);
      }
    }
  };

  return (
    <div ref={appRef} id="app">
      {showBackButton && (
        <div id="prev-button">
          <NavButton handleNavigation={handleGoBack} iconSrc="prev-icon.png" />
        </div>
      )}

      {showNextButton && (
        <div id="next-button">
          <NavButton handleNavigation={handleGoNext} iconSrc="next-icon.png" />
        </div>
      )}

      <form
        onScroll={handleOnScroll}
        ref={formRef}
        id="form-app"
        autoComplete="off"
        onSubmit={() => {}}
      >
        <AddressInput />
        <AmountInput />
        <OtpInput />
      </form>
      {!showNextButton && (
        <button className="submit-button p3">Send Tokens!</button>
      )}
    </div>
  );
}

export default App;
