export default (...keys) =>
  keys.reduce((obj, key) =>
    (key ? { ...obj, [key]: key } : obj), {});
