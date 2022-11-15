/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  //return the keys
  return Object.keys(assignments);
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {
  //get the values and assign to a new variable
  let scoreArray = Object.values(score);
  //calculate the score and round it
  calculatedScore = Math.round((scoreArray[0] / scoreArray[1]) * 100);
  //return the calculated score
  return calculatedScore;
}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
function getHighestOfTwoScores(score1, score2) {
  //get the values for the first score
  let scoreArray1 = Object.values(score1);
  //get the values for the second score
  let scoreArray2 = Object.values(score2);
  //calculate the scores, round them, then get the higher number
  calculatedScore = Math.max(Math.round((scoreArray1[0] / scoreArray1[1]) * 100), Math.round((scoreArray2[0] / scoreArray2[1]) * 100));
  //return the calculated score
  return calculatedScore;
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
