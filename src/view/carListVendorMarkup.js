import renderCar from './carMarkup';
import renderFilters from './carFilters';

const renderVendorCars = (vendorName, cars) =>
`
  <div class="card border-primary">
    <div class="card-header">${vendorName}</div>
    <div class="card-body text-primary">
      <h5 class="card-title">Car list</h5>
      <p class="card-text">
      ${cars.map((car, index) => renderCar(car, index))} 
      </p>
    </div>
  </div>`;


const renderListByVendor = (vendors, filters) =>
`
  <div class="col-md-12">
    ${renderFilters(filters)}
  </div>
  <div class="col-md-12">
    ${vendors.map(vendor => renderVendorCars(vendor.getName(), vendor.getCarList()))}
  </div>
`;

export default renderListByVendor;
