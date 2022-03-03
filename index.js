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
  let scores = Object.values(score);
  
  for (let i = 0; i < scores.length; i++) {
    return Number(((scores[0] / scores[1]) * 100).toFixed())
  } 
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
  let scores1 = Object.values(score1);
  let scores2 = Object.values(score2);
  let maxScore1 = 0;
  let maxScore2 = 0;
  for (let i = 0; i < scores1.length; i++) {
     maxScore1 = Math.max(Number(((scores1[0] / scores1[1]) * 100).toFixed()))
  } 
  for (let j = 0; j < scores2.length; j++) {
     maxScore2 =  Math.max(Number(((scores2[0] / scores2[1]) * 100).toFixed()))
  }
  return (maxScore1 > maxScore2 ? maxScore1 : maxScore2)
}




// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
