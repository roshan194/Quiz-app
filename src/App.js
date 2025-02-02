import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import './App.css';

const App = () => {
  const [quizData, setQuizData] = useState([
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", isCorrect: true },
        { text: "London", isCorrect: false },
        { text: "Berlin", isCorrect: false },
        { text: "Madrid", isCorrect: false }
      ]
    },
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "3", isCorrect: false },
        { text: "4", isCorrect: true },
        { text: "5", isCorrect: false },
        { text: "6", isCorrect: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", isCorrect: false },
        { text: "Mars", isCorrect: true },
        { text: "Jupiter", isCorrect: false },
        { text: "Saturn", isCorrect: false }
      ]
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: [
        { text: "Harper Lee", isCorrect: true },
        { text: "Mark Twain", isCorrect: false },
        { text: "J.K. Rowling", isCorrect: false },
        { text: "Ernest Hemingway", isCorrect: false }
      ]
    }
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-app">
      {showResult ? (
        <Result score={score} totalQuestions={quizData.length} restartQuiz={restartQuiz} />
      ) : (
        quizData.length > 0 && (
          <Quiz
            question={quizData[currentQuestion]}
            currentQuestion={currentQuestion + 1}
            totalQuestions={quizData.length}
            handleAnswerClick={handleAnswerClick}
          />
        )
      )}
    </div>
  );
};

export default App;