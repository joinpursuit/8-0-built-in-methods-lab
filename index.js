// Example data
const assignments = {
  quizzes: [
    { title: "Arrays", score: { received: 4, max: 5 } },
    { title: "Objects", score: { received: 5, max: 6 } },
    { title: "Loops", score: { received: 2, max: 4 } },
  ],
  labs: [
    { title: "Arrays", score: { received: 0, max: 1 } },
    { title: "Objects", score: { received: 1, max: 1 } },
    { title: "Loops", score: { received: 1, max: 1 } },
  ],
  projects: [
    { title: "Music Box", score: { received: 14, max: 18 } },
    { title: "Calculator", score: { received: 12, max: 12 } },
  ],
};

/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
    return Object.keys(assignments);
 } 
//console.log(Object.keys(assignments));

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {
  let givenScore = (score.received/score.max * 100);
   return Math.round(givenScore);

console.log(givenScore);
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
  let highScores1 = Math.round((score1.received/score1.max) * 100);
  let highScores2 = Math.round((score2.received/score2.max) * 100);

    return Math.max(highScores1, highScores2);
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
