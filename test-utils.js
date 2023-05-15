import { render, fireEvent, waitFor, screen } from "@testing-library/react";

export function getSlidesCount(container) {
  return container.getElementsByClassName("slick-slide").length;
}

export function getClonesCount(container) {
  return container.getElementsByClassName("slick-cloned").length;
}

export function getActiveSlidesCount(container) {
  return container.querySelectorAll(".slick-slide.slick-active").length;
}

export function getActiveSlides(container) {
  return container.querySelectorAll(".slick-slide.slick-active");
}

export function getActiveSlidesText(container) {
  const slides = activeSlides(container);
  return Array.from(slides).map(e => e.textContent);
}

export function clickNext(container) {
  fireEvent(
    container.getElementsByClassName("slick-next")[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
}

export function clickPrevious(container) {
  fireEvent(
    container.getElementsByClassName("slick-prev")[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
}
