/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  //Object.keys() takes an object as an argument and returns an array of all the keys.
  let newObj = Object.keys(assignments);
  return newObj;
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {
  //The Math.round() function returns the value of a number rounded to the nearest integer.
  // to get precentage between two scores --> ((numba -NumB)/numB)*100
  //const percentScore = ((score.max - score.received) / score.received) *100
 const percentScore = (score.received *100)/ score.max
  //console.log('%%', percentScore)

  return Math.round(percentScore)
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
  //use Math.max() to return the highest of any amount of numbers.
  // const highestScore1 = Math.max(score1);
  // const highestScore2 = Math.max(score2);
  // const rounded = Math.round(highestScore1,highestScore2)
  // return rounded
  const percentScore1 = Math.round((score1.received *100)/ score1.max);
  const percentScore2 = Math.round((score2.received *100)/ score2.max);
  console.log("!! ", percentScore1)
  console.log('*** ', percentScore2)
  return Math.max(percentScore1 , percentScore2)
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
