const cleanKeys = obj => {
  let clone = {};
  Object.entries(obj).forEach(([key, value]) => {
    clone[key.replace('@', '')] = value;
  });
  return clone;
};

export default cleanKeys;
