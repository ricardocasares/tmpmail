export default s => {
  const d = new Date(0);
  d.setUTCSeconds(s);
  return d;
};
