import { createContext, useContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";
import { setNextPlayer } from "../helpers";
import { setRank } from "../helpers";

// const players = ["blue", "green", "red", "yellow"];
const initialState = {
  currentQuestionIndex: 0,
  questions,
  showResults: false,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
  numberOfPlayers: 1,
  score: {
    blue: {
      rank: "Private",
      points: 0,
      prevPoints: 0,
    },
  },

  currentPlayer: "blue",
  isNextButtonActive: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const pointsCurrentUser =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.score[state.currentPlayer].points + 1
          : state.score[state.currentPlayer].points > 0
          ? state.score[state.currentPlayer].points - 1
          : 0;
      const currentPlayerRank = state.score[state.currentPlayer].rank;
      console.log("currentPlayerRank", currentPlayerRank);
      const currentPlayerPoints = state.score[state.currentPlayer].points;
      const currentRank = setRank(currentPlayerPoints, currentPlayerRank);
      console.log("currentRank", currentRank);

      return {
        ...state,
        isNextButtonActive: true,
        currentAnswer: action.payload,
        score: {
          ...state.score,
          [state.currentPlayer]: {
            ...state.score[state.currentPlayer],
            points: pointsCurrentUser,
            rank: currentRank,
          },
        },
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      const nextPlayer = setNextPlayer(
        state.currentPlayer,
        state.numberOfPlayers
      );
      console.log("nextPlayer", nextPlayer);

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
        currentPlayer: nextPlayer,
        isNextButtonActive: false,
      };
    }
    case "RESTART": {
      return initialState;
    }
    case "ONE": {
      return {
        ...state,
        score: {
          blue: {
            rank: "Private",
            points: 0,
          },
        },
        numberOfPlayers: 1,
      };
    }
    case "TWO": {
      return {
        ...state,
        score: {
          blue: {
            rank: "Private",
            points: 0,
          },
          green: {
            rank: "Private",
            points: 0,
          },
        },
        numberOfPlayers: 2,
      };
    }
    case "THREE": {
      return {
        ...state,
        score: {
          blue: {
            rank: "Private",
            points: 0,
          },
          green: {
            rank: "Private",
            points: 0,
          },
          red: {
            rank: "Private",
            points: 0,
          },
        },
        numberOfPlayers: 3,
      };
    }
    case "FOUR": {
      return {
        ...state,
        score: {
          blue: {
            rank: "Private",
            points: 0,
          },
          green: {
            rank: "Private",
            points: 0,
          },
          red: {
            rank: "Private",
            points: 0,
          },
          yellow: {
            rank: "Private",
            points: 0,
          },
        },
        numberOfPlayers: 4,
      };
    }
    default: {
      return state;
    }
  }
};
export const useQuizContext = () => {
  return useContext(QuizContext);
};
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
