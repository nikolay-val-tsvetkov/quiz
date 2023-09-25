export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
// export const moveCounter = () => {
//   for (let i = 1; i <= 5; i++) {
//     if (i === 5) {
//       i = 1;
//     }
//     return i;
//   }
// };

export const setNextPlayer = (currentPlayer, numberOfPlayers) => {
  const playerColors = ["blue", "green", "red", "yellow"];
  const currentPlayerIndex = playerColors.indexOf(currentPlayer);

  if (currentPlayerIndex === -1) {
    return "blue";
  }

  const nextPlayerIndex = (currentPlayerIndex + 1) % numberOfPlayers;

  return playerColors[nextPlayerIndex];
};

export const setRank = (points, rank) => {
  console.log(points);

  if (points < 3) {
    return (rank = "Private");
  } else if (points >= 3 && points < 9) {
    return (rank = "Officer");
  } else if (points >= 9) {
    return (rank = "General");
  }
  return;
};
