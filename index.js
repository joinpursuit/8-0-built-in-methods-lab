/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  return Object.keys(assignments)
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {
  let percentage = score.received/score.max * 100
  //Not needed but created a variable that makes the math math. 
  return Math.round(percentage)
}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * score2.received can be pulled from data 
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
function getHighestOfTwoScores(score1, score2) {
  let firstScore = getPercentageScore(score1)
  let secondScore = getPercentageScore(score2)
  //Pulling from the already created function to utilize the params. 
  return Math.max(firstScore, secondScore)


  /*
  ALTERNATIVE CODE: 
  let sc0re1 = score1.received/score1.max * 100
  let sc0re2 = score2.received/score2.max * 100
  */
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
