const randInd = (max) => {
  if (typeof max !== "number") throw new Error("max should be a number");
  if (max < 0) throw new Error("max should be greater than or equal 0");
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
};

module.exports = {randInd};
