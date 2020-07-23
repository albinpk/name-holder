const { genFullName } = require("./nameGenerator");
const { nameArray } = require("./nameFormater");

const genderCh = (gender) => {
  if (typeof gender !== "string")
    throw new Error(`Gender should be a string.. "${gender}"`);

  if (["m", "male"].includes(gender.toLowerCase())) return "m";
  if (["f", "female"].includes(gender.toLowerCase())) return "f";
  throw new Error(`Gender only accept "m" | "f".. "${gender}"`);
};

const stringParam = (gender, [count, seprator]) => {
  if (count !== undefined && typeof count !== "number")
    throw new Error(`Argument after gender should be a number.. "${count}"`);
  if (seprator !== undefined && typeof seprator !== "string")
    throw new Error(`Argument should be a string.. "${seprator}"`);

  const gen = genderCh(gender);
  if (typeof count === "number") {
    const sep = typeof seprator === "string" ? seprator : ", ";
    return nameArray(count, gen).join(sep);
  }
  return genFullName(gen);
};

const numberParam = (count, [separator]) => {
  if (separator !== undefined && typeof separator !== "string")
    throw new Error(`Argument after number should be a string.. "${separator}"`);

  const sep = typeof separator === "string" ? separator : ", ";
  return nameArray(count).join(sep);
};

const arrayParam = (array) => {
  const [_first, _second, _third] = array;

  switch (typeof _first) {
    case "string":
      if (_second !== undefined && typeof _second !== "number")
        throw new Error(`Argument should be a number "${_second}"`);
      if (_third !== undefined && typeof _third !== "function")
        throw new Error(`Argument should be a function "${_third}"`);

      const gender = genderCh(_first);
      const names =
        typeof _second === "number"
          ? nameArray(_second, gender)
          : nameArray(1, gender);
      return typeof _third === "function" ? names.map(_third) : names;

    case "number":
      if (_second !== undefined && typeof _second !== "function")
        throw new Error(`Argument should be a function "${_second}"`);

      const arr = nameArray(_first);
      return typeof _second === "function" ? arr.map(_second) : arr;

    default:
      return nameArray(1);
  }
};

const objectParam = (obj) => {
  if (Object.keys(obj).length === 0) return genFullName();

  if (obj.firstNameOnly !== undefined && typeof obj.firstNameOnly !== "boolean")
    throw new Error(`Argument should be a boolean.. "${obj.firstNameOnly}"`);
  if (obj.gender !== undefined && typeof obj.gender !== "string")
    throw new Error(`Argument should be a string.. "${obj.gender}"`);
  if (obj.count !== undefined && typeof obj.count !== "number")
    throw new Error(`Argument should be a number.. "${obj.count}"`);
  const gender = obj.gender ? genderCh(obj.gender) : undefined;
  const names = nameArray(obj.count || 1, gender, obj.firstNameOnly);

  if (obj.asArray !== undefined && typeof obj.asArray !== "boolean")
    throw new Error(`Argument should be a boolean.. "${obj.asArray}"`);
  if (obj.format !== undefined && typeof obj.format !== "function")
    throw new Error(`Argument should be a function.. "${obj.format}"`);

  if (obj.asArray)
    return typeof obj.format === "function" ? names.map(obj.format) : names;

  if (obj.separator !== undefined && typeof obj.separator !== "string")
    throw new Error(`Argument should be a string.. "${obj.separator}"`);
  const sep = obj.separator !== undefined ? obj.separator : ", ";
  return names.join(sep);
};

module.exports = { stringParam, numberParam, arrayParam, objectParam };
