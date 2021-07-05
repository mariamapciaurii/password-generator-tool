
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Generator-Container">
        <div className="Generator-Container__Content">
          <h2 className="Generator-Header__Title">Password Generator</h2>
          <div className="Generator-Password__Wrapper">
            <h3 className="Password-Wrapper__Title">Password</h3>
            <button className="Password-Coppy__btn">
              <i className='far fa-clipboard'></i>
            </button>
          </div>

          <div className="Generator-tool__box">
            <label htmlFor="password-strength">Password strength</label>
            <input
              type='number'
              id='password-strength'
              name='password-strength'
              max='32'
              min='4'
            />
          </div>

          <div className='Generator-tool__box'>
            <label htmlFor='uppercase-letters'>Include Uppercase </label>
            <input
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
            />
          </div>

          <div className='Generator-tool__box'>
            <label htmlFor='lowercase-letters'>Include Lowercase</label>
            <input
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
            />
          </div>

          <div className='Generator-tool__box'>
            <label htmlFor='include-numbers'>Include Numbers</label>
            <input
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
            />
          </div>

          <div className='Generator-tool__box'>
            <label htmlFor='include-symbols'>Include Symbols</label>
            <input
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
            />
          </div>
          <button className="Generator-Password__btn">Generate Password</button>

        </div>
      </div>  
    </div>
  );
}

export default App;
