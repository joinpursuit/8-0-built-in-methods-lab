/**
 * 
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
// Example data
// const assignments = {
//   quizzes: [
//     { title: "Arrays", score: { received: 4, max: 5 } },
//     { title: "Objects", score: { received: 5, max: 6 } },
//     { title: "Loops", score: { received: 2, max: 4 } },
//   ],
//   labs: [
//     { title: "Arrays", score: { received: 0, max: 1 } },
//     { title: "Objects", score: { received: 1, max: 1 } },
//     { title: "Loops", score: { received: 1, max: 1 } },
//   ],
//   projects: [
//     { title: "Music Box", score: { received: 14, max: 18 } },
//     { title: "Calculator", score: { received: 12, max: 12 } },
//   ],
// };

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

//  Math.round( 20.49)
//  (0.012858542*100).toFixed(7)
//  Number.parseInt("76")

function getPercentageScore(score) {
let myPercent = ((score.received * 100) / score.max)
myIntegerPercent = parseInt(Math.round(myPercent))
return myIntegerPercent 
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
  
let myPercent1 = ((score1.received * 100) / score1.max)
myIntegerPercent1 = parseInt(Math.round(myPercent1))

let myPercent2 = ((score2.received * 100) / score2.max)
myIntegerPercent2 = parseInt(Math.round(myPercent2))

let myArrayTool = [myIntegerPercent1, myIntegerPercent2]

theHighest = Math.max(...myArrayTool)

return theHighest

}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
