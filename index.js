/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  // using the Object.keys method to return an array of all the categories in the assignments object
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
  // using the Math.round method to round the quotient of score.received divided by score.max multiplied by 100,  then returning the value
  return (Math.round((score.received / score.max) * 100))
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
  // declaring a variable to represent score1.received divided by score1.max
  let scoreOne = score1.received / score1.max;
  // declaring a variable to represent score2.received divided by score2.max
  let scoreTwo = score2.received / score2.max;
  // using Math.max to determine the highest number value between the scoreOne and scoreTwo variables and assigning the value to highestScore
  let highestScore = Math.max(scoreOne, scoreTwo);
  // using the Math.round method to round the product of highestScore multiplied by 100, then returning the value 
  return (Math.round(highestScore * 100))
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
