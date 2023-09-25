import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import PlayerPoints from "./PlayerPoints/PlayerPoints";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const isNextButtonActive = quizState.isNextButtonActive;

  const players = Object.entries(quizState.score);
  console.log("clement", quizState.score);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of{" "}
              {quizState.questions.length}
            </div>
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <Question />
          <div
            className={
              isNextButtonActive ? "next-button" : "nextButton-disabled"
            }
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next
          </div>
          <div className="playersCircles">
            {players.map((player, index) => (
              <PlayerPoints key={index} player={player} />
            ))}
          </div>
          {/* <div className="playersCircles">
            <span className="playerCircle"></span>
            <span className="playerCircle"></span>
            <span className="playerCircle"></span>
            <span className="playerCircle"></span>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Quiz;
