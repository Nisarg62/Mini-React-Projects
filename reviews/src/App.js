import './App.css';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Reviews />
      </section>
    </div>
  );
}

export default App;
