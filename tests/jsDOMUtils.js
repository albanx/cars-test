import { startApplication } from '../src/application.js';

const setUpJSDOM = () => {
  const el = document.createElement('div');
  el.classList.add('mortgage-calculator');
  document.body.appendChild(el);
};

export const setUpEnv = config => {
  setUpJSDOM();
  startApplication(config);
};

const getEvent = type =>
  new Event(type, {
    'bubbles': false,
    'cancelable': true
  });

export const dispatchInputEvent = (element, value) => {
  element.value = value;
  const event = getEvent('input');
  element.dispatchEvent(event);
  dispatchChangeEvent(element);
};

export const dispatchClickEvent = element => {
  const event = getEvent('click');
  element.dispatchEvent(event);
};

export const dispatchChangeEvent = element => {
  const event = getEvent('change');
  element.dispatchEvent(event);
};
