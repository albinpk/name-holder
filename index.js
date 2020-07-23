const {
  genFullName,
  genPetName,
  genNickName,
} = require("./utils/nameGenerator");
const {
  numberParam,
  stringParam,
  arrayParam,
  objectParam,
} = require("./utils/secondParam");

/**
 * Generate random names as array or string
 * @example nameHolder() // Generate a random name
 * "Isabel Andres"
 *
 *
 * @param options
 *
 * @example nameHolder("f")
 * // Generate a female name
 *
 * @example nameHolder("m", 2)
 * // Generate a string of 2 male names separate by comma(,)
 *
 * @example nameHolder("m", 2, " & ")
 * // Generate a string of 2 male names separate by string(" & ")
 *
 * @example nameHolder(2)
 * // Generate a string of 2 random names separate by comma(,)
 *
 * @example nameHolder(2, " and ")
 * // Generate a string of 2 random names separate by string(" and ")
 *
 * @example nameHolder([])
 * // Return a random name in array
 * [ "Chaya Mooney" ]
 *
 * @example nameHolder(['f'])
 * // Return a female name in array
 *
 * @example nameHolder(['m', 2])
 * // Return 2 male name in array
 *
 * @example nameHolder(['m', 2, (name) => `Hi ${name}`])
 * // Return 2 formated male name in array
 * [ 'Hi Damion Nina', 'Hi Cohen Choi' ]
 *
 * @example nameHolder([2, (name) => `Iam ${name}`])
 * // Return 2 formated random names in array
 *
 *
 * @example nameHolder({options?})
 * @description Options list
 * @param gender "m" | "f"
 * @description Select only specific gender
 * @param count number
 * @description Number of names
 * @param separator string
 * @description Separator string
 * @param firstNameOnly boolean
 * @description Only return first names
 * @param asArray boolean
 * @description Return result in array
 * @param format function
 * @description Formater function for each name
 * @example (name) => `Hi ${name}`
 */

const nameHolder = (...options) => {
  const [param1, ...params] = options;
  try {
    switch (typeof param1) {
      case "string":
        return stringParam(param1, params);

      case "number":
        return numberParam(param1, params);

      case "object":
        if (Array.isArray(param1)) return arrayParam(param1);
        return objectParam(param1);

      default:
        return genFullName();
    }
  } catch (err) {
    return console.log(err);
  }
};

module.exports = nameHolder;

module.exports.petName = genPetName;
module.exports.nickName = genNickName;
