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
//EX:
// assignments = {
//   quizzes: [
//     { title: "Arrays", score: { received: 4, max: 5 } },
//     { title: "Objects", score: { received: 5, max: 6 } },
//     { title: "Loops", score: { received: 2, max: 4 } },
//   ],
// }

function getPercentageScore(score) {
  // Long Way:
  // let percent = 0;
  // let firstNum;
  // let secondNum;
  // for(let number in score){
  //   if(number === 'received'){
  //     firstNum = score[number];
  //     console.log(firstNum)
  //   } else if (number === 'max'){
  //     secondNum = score[number];
  //     console.log(secondNum);
  //   }
  // }
  // percent = (firstNum / secondNum) * 100
  let values = Object.values(score);
  let percent = (values[0] / values[1])* 100;
  return Math.round(percent);
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
  let percentOne = getPercentageScore(score1);
  let percentTwo = getPercentageScore(score2);
  return Math.max(percentOne, percentTwo)
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
