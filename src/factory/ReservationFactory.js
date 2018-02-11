import Reservation from '../model/Reservation';
import createLocation from './LocationFactory';
import cleanKeys from "../utility/cleanKeys";

const createReservation = ({PickUpDateTime, ReturnDateTime, PickUpLocation, ReturnLocation}) => {
  return new Reservation(
    PickUpDateTime,
    ReturnDateTime,
    createLocation(cleanKeys(PickUpLocation)),
    createLocation(cleanKeys(ReturnLocation))
  );
};

export default createReservation;
