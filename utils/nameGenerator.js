const { randInd } = require("./index");
const allName = require("../lib/human");
const maleName = require("../lib/male");
const femaleName = require("../lib/female");
const petNames = require("../lib/petName");
const dogNames = require("../lib/dog");
const nickNames = require("../lib/nickName");

const All_MAX = allName.length;
const M_MAX = maleName.length;
const F_MAX = femaleName.length;

const genName = (gender) => {
  if (typeof gender === "string")
    return gender === "m"
      ? maleName[randInd(M_MAX)]
      : femaleName[randInd(F_MAX)];
  return allName[randInd(All_MAX)];
};

const genPair = (first) => {
  let second;
  while ((second = genName()) === first) {}
  return second;
};

const genFullName = (gender) => {
  const first = genName(gender);
  return `${first} ${genPair(first)}`;
};

/**
 * Generate a pet name
 * @description
 * currently no parameters allowed
 */
const genPetName = () => {
  const pet = [...dogNames, ...petNames];
  return pet[randInd(pet.length)];
};

/**
 * Generate a nick name
 * @description
 * currently no parameters allowed
 */
const genNickName = () => {
  return nickNames[randInd(nickNames.length)];
};

module.exports = { genFullName, genName, genPetName, genNickName };
