function getAssignmentTypes(assignments) {
  return Object.keys(assignments);
}

function getPercentageScore(score) {
  let maxScore = score.max;
  let receivedScore = score.received;
  return Math.round((receivedScore / maxScore) * 100);
}

function getHighestOfTwoScores(score1, score2) {
  let maxScore1 = Math.round((score1.received / score1.max) * 100);
  let maxScore2 = Math.round((score2.received / score2.max) * 100);
  let maxScoreArr = [maxScore1, maxScore2];
  return Math.max(maxScoreArr[0], maxScoreArr[1]);
}

// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
