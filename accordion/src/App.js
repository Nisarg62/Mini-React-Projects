import './App.css';
import Questions from './components/Questions';
import questions from './components/data';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='title'>
          <p>questions and answers about login</p>
        </div>
        <div className='questions-container'>
          {questions.map(question => <Questions question = {question} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
