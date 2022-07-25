/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
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
  let scoreResult = score.received / score.max
  let scorePercent = (scoreResult * 100).toFixed(0)
  console.log(scorePercent)
  return Number(scorePercent)
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
  let scoreResult1 = score1.received / score1.max
  let scorePercent1 = (scoreResult1 * 100).toFixed(0)

  let scoreResult2 = score2.received / score2.max
  let scorePercent2 = (scoreResult2 * 100).toFixed(0)

  console.log(scorePercent1)
  if (scorePercent1 > scorePercent2){
    return Number(scorePercent1)
  }else (scorePercent2 > scorePercent1) {
    return Number(scorePercent2)
  }
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
