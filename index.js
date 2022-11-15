/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  /* input is an object
  outputting an array of strings -- all the keys
  should use Object.keys. Right? */

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

  answer = (score.received/score.max)*100
  answer = (Math.round(answer))
  return( answer)
}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
//Using the function from the last question, we can determine which of two scores is higher. 

function getHighestOfTwoScores(score1, score2) {
if((getPercentageScore(score1))>getPercentageScore(score2)){
  return getPercentageScore(score1)
} else if ((getPercentageScore(score1))<getPercentageScore(score2)){
return getPercentageScore(score2)
} else if ((getPercentageScore(score1))===getPercentageScore(score2)){ return "both scores are the same"
}
}


// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
