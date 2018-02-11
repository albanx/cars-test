import Vendor from "../model/Vendor";
const createVendor = ({Code, Name}) => {
  return new Vendor(Name, Code)
};

export default createVendor;
