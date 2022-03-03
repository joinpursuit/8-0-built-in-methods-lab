/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
//1. the method that will return all keys in an object: Object.keys
//2. pass in the para into the method
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
//1. use variable to store the method only calls the numbers in the score
//2. use variable to store scores converted to percent
//3. return score rounded
function getPercentageScore(score) {
  let Value = Object.values(score);
  let roundUp = Math.round(Value[0] / Value[1] * 100);
  return roundUp;

}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
//1. assign to variables score pass through Object.value method
//2. use variables converting each value to percent
//3. return the max of the two numbers by passing through Math.max method.
function getHighestOfTwoScores(score1, score2) {
  let value1 = Object.values(score1);
  let value2 = Object.values(score2);
    let roundUp1 = Math.round(value1[0] / value1[1] * 100);
    let roundUp2 = Math.round(value2[0] / value2[1] * 100);
    return Math.max(roundUp1, roundUp2);
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
