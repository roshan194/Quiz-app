import React from 'react';

const Quiz = ({ question, currentQuestion, totalQuestions, handleAnswerClick }) => {
  return (
    <div className="quiz">
      <h2>Question {currentQuestion} of {totalQuestions}</h2>
      <h3>{question.question}</h3>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index} onClick={() => handleAnswerClick(answer.isCorrect)}>
            {answer.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;