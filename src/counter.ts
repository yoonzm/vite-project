import {log} from "./log.ts";

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    log('setCounter');
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
