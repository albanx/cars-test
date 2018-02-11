import Vendor from '../model/Vendor';
const createVendor = ({Code, Name}) => new Vendor(Name, Code);
export default createVendor;
