import { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');

  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Response status not ok');
      }

      return response.json();
    })
    .then(resData => {
      const newQuestion = resData.results[0].question;
      setQuestion(newQuestion);
    })
  }

  return (
    <>
      <button onClick={fetchData}>Fetch a trivia</button>
      <p>{question}</p>
    </>
  );
}

export default App;
