# Quiz Web App

A web-based quiz application with gamification features, fetching quiz data from an external API and presenting it through an intuitive and engaging user interface.

## Features
- Fetches quiz questions from an API endpoint.
- Multiple-choice questions with interactive selection.
- Displays a summary of results upon quiz completion.
- Includes error handling and loading state for better user experience.

## Technologies Used
- React.js
- JavaScript (ES6+)
- CSS (for styling)

## API Integration
The quiz data is fetched from the following endpoint:
```
https://api.jsonserve.com/Uw5CrX
```
The app ensures proper parsing and error handling for robust data integration.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
quiz-app/
│-- src/
│   │-- components/
│   │   │-- Quiz.js
│   │   │-- Result.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## Usage
- Start the quiz by answering the displayed questions.
- Select an answer to proceed to the next question.
- View the final score at the end and restart the quiz if desired.

## Deployment
The app can be deployed on platforms like:
- Netlify
- Vercel
- GitHub Pages

## License
This project is licensed under the MIT License.

## Author
Developed by Roshan Kumar.

