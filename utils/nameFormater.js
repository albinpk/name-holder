const { genFullName, genName } = require("./nameGenerator");

const nameList = (length, gender) => {
  const names = nameArray(length, gender);
  return names.join(", ");
};

const nameArray = (length, gender, firstOnly) => {
  length = Math.abs(Math.floor(length));

  if (length === Infinity) throw new Error("Infinity not allowed as count");

  const nameFn = firstOnly ? genName : genFullName;

  const names = [];
  while (names.length !== length) {
    const name = nameFn(gender);
    if (!names.includes(name)) names.push(name);
  }
  return names;
};

module.exports = { nameArray, nameList };
