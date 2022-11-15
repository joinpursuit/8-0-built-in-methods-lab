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
  // use math.round() to either round up or down to nearest interger
  let finalScore = Math.round((score.received / score.max) * 100
  )
  return finalScore
}

// 
// round up 77.77777777777779 to 78
// round down 83.33333333333334 to 83
// return a number

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
function getHighestOfTwoScores(score1, score2) {
  
  let highOne = Math.round((score1.received / score1.max) * 100)
  let highTwo = Math.round((score2.received / score2.max) * 100)

  return Math.max(highOne, highTwo)

}


//takes in 2 parameters => 2 different scores
// math.max() returns highest number
// use math.round() to round up or down
// return the highest number out of the two

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
