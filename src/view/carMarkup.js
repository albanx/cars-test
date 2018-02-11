import renderFeatures from './carFeaturesMarkup';

const renderCar = (car, index, hideMe = false) => `
  <div class="col-md-12">
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">${car.getVendorName()}</strong>
        <h3 class="mb-0">
          <a class="car-link text-dark" href="/car/${index}">${car.getModelName()}</a>
        </h3>
        <div class="mb-1 text-muted">${car.getPriceString()}</div>
        <p class="card-text mb-auto">${renderFeatures(car)}</p>
        ${hideMe ?'' : `<a class="car-link btn btn-info" href="/car/${index}">More info</a>`}
      </div>
      <img class="card-img-right" alt="this is a car" src="${car.getUrlImage()}">
    </div>
  </div>
`;

export default renderCar;
