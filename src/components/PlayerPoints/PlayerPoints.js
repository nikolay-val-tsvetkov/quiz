import "./playerPoints.css";
import { useQuizContext } from "../../contexts/quiz";

export default function PlayerPoints({ player }) {
  const className = player[0];
  console.log(className, player);

  // console.log("now", quizState.score[quizState.currentPlayer]);

  return (
    <div className={`points-circle ${className}`}>
      <div>{player[1]?.points || 0}</div>
      <div>{player[1]?.rank}</div>
    </div>
  );
}
