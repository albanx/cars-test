import cleanKeys from './utility/cleanKeys';
import renderCarList from './view/carListMarkup';
import renderReservation from './view/reservationMarkup';
import renderPage from './view/pageMarkup';
import createCarCost from './factory/CarCostFactory';
import createReservation from './factory/ReservationFactory';
import createCar from './factory/CarFactory';
import createVendor from './factory/VendorFactory';
import renderCar from './view/carMarkup';
import renderCarDetailHeader from './view/carHeader';
import renderListByVendor from './view/carListVendorMarkup';

export default class CarTrawler {
  constructor(jsonData, domElement) {
    this.jsonData = jsonData;
    this.domElement = domElement;
    this.carList = [];
    this.reservation = null;
    this.orderBy = 'Price';
    this.navMapping = {
      '.car-link': this.navigateToCarDetails.bind(this),
      '.back-to-search': this.navigateBackToSearch.bind(this),
      '.sortby': this.navigateToSearchWithSort.bind(this),
      '#group': this.navigateToSearchWithGroup.bind(this)
    }
  }

  start() {
    this.carList = this.parseCarList();
    this.reservation = this.parseReservationData();
    this.bindEvents();
    this.orderByPrice();
    this.renderCarList();
  }

  bindEvents() {
    this.domElement.addEventListener('click', e => {
      if (e.target) {
        this.handleClickEvent(e.target, e)
      }
    })
  }

  handleClickEvent(el, event) {
    for(let key in this.navMapping) {
      if (el.matches(key)) {
        event.preventDefault();
        return this.navMapping[key](el);
      }
    }
  }

  navigateToSearchWithGroup(el) {
    if (el.checked) {
      this.renderCarListByVendor();
    } else {
      this.renderCarList();
    }
  }

  navigateToSearchWithSort(el) {
    this.orderBy = el.value;
    this['orderBy' + this.orderBy]();
    this.renderCarList();
  }

  navigateBackToSearch(el) {
    history.pushState(null, '', '/');
    this.renderCarList();
  }

  navigateToCarDetails(el) {
    let href = el.getAttribute('href');
    let index = parseInt(href.replace('/car/', ''));
    history.pushState(null, el.innerHTML, href);
    this.renderCarDetails(index);
  }

  orderByModel() {
    this.carList = this.carList.sort((car1, car2) => car1.getModelName() > car2.getModelName());
  }

  orderByPrice() {
    this.carList = this.carList.sort((car1, car2) => car1.getPrice() > car2.getPrice());
  }

  renderPage(header, content) {
    this.domElement.innerHTML = renderPage(header, content);
  }

  renderCarDetails(index) {
    this.renderPage(renderCarDetailHeader(), renderCar(this.carList[index], index, true));
  }

  renderCarListByVendor() {
    let vendors = this.carList
      .map(car => car.getVendor())
      .filter((elem, pos, arr) => arr.indexOf(elem) === pos);

    this.renderPage(
      renderReservation(this.reservation),
      renderListByVendor(vendors,  {orderBy: this.orderBy, group: true})
    );
  }

  renderCarList() {
    this.renderPage(
      renderReservation(this.reservation),
      renderCarList(this.carList, {orderBy: this.orderBy})
    );
  }

  parseCarList() {
    const data = this.jsonData[0].VehAvailRSCore.VehVendorAvails;
    let carGroups = data.map(item => {
      let vendor = createVendor(cleanKeys(item.Vendor));

      let vendorCars = item.VehAvails.map(carData => {
        let car = createCar(cleanKeys(carData.Vehicle));
        let cost = createCarCost(cleanKeys(carData.TotalCharge));
        car.setCost(cost);
        car.setVendor(vendor);
        car.setStatus(carData['@Status']);
        return car;
      });

      vendor.setCarList(vendorCars);

      return vendorCars;
    });

    return carGroups.reduce((prev, curr) => prev.concat(curr))
  }

  parseReservationData() {
    const data = this.jsonData[0].VehAvailRSCore.VehRentalCore;
    return createReservation(cleanKeys(data));
  }
}
