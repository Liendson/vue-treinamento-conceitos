export default (value, lower) => {
  return lower ? value.toLowerCase() : value.toUpperCase();
}