import Location from '../model/Location';

const createLocation = ({Name}) => {
  return new Location(Name);
};

export default createLocation;
