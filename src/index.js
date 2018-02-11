import 'babel-polyfill';
import './css/global.css';
import './css/bootstrap.min.css';
import CarTrawler from './CarTrawler';
import {URL_API} from './constants';
import {get} from './utility/Request';
const renderToDomElement = document.querySelector('#main');

const start = async () => {
  let data = await get(URL_API).catch(error => console.log('Errors ', error));
  const app = new CarTrawler(data, renderToDomElement);
  app.start();
};

start();
