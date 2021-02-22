import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <span className='title'>COUNTRY QUIZ</span>
        <div className='modal'>
          <div>
            <h3>Preguntas.... </h3>
          </div>
          <div>
            <input type='button' className='input-option' value='opciones' />
            <input type='button' className='input-option' value='opciones' />
            <input type='button' className='input-option' value='opciones' />
            <input type='button' className='input-option' value='opciones' />
          </div>
            
        </div>
        <span className='createdBy'>Created by Dayamartinez</span>
      </header>
    </div>
  );
}

export default App;
