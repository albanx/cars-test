import renderCar from './carMarkup';
import renderFilters from './carFilters';

const renderCarList = (cars, filters) =>
  `
  <div class="col-md-12">
    ${renderFilters(filters)}
  </div>
  <div class="col-md-12">
      ${cars.map((car, index) => renderCar(car, index))} 
  </div>
  `;

export default renderCarList;
