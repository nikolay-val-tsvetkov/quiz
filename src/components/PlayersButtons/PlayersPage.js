import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";
import "./playersButtons.css";
export default function PlayersPage() {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("jump", quizState);

  return (
    <div className="players-container">
      <div>
        <button
          className="players-button"
          onClick={() => dispatch({ type: "ONE" })}
        >
          1 Player
        </button>
      </div>
      <div>
        <button
          className="players-button"
          onClick={() => dispatch({ type: "TWO" })}
        >
          2 Players
        </button>
      </div>
      <div>
        <button
          className="players-button"
          onClick={() => dispatch({ type: "THREE" })}
        >
          3 Players
        </button>
      </div>
      <div>
        <button
          className="players-button"
          onClick={() => dispatch({ type: "FOUR" })}
        >
          4 Players
        </button>
      </div>
    </div>
  );
}
