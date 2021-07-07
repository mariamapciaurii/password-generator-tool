import React , {useState} from 'react' ;
import './App.css';

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(32)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  return (
    <div className="App">
      <div className="Generator-Container">
        <div className="Generator-Container__Content">
          <h2 className="Generator-Header__Title">Password Generator</h2>
          <div className="Generator-Password__Wrapper">
            <h3 className="Password-Wrapper__Title">{password}</h3>
            <button className="Password-Coppy__btn">
              <i className='far fa-copy'></i>
            </button>
          </div>

          <div className="Generator-Setting__box Generator-Password__Length">
            <label htmlFor="password-strength">Password Lenght</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type ='number'
              id='password-strength'
              name='password-strength'
              max='32'
              min='4'
            />
          </div>

          <div className='Generator-Setting__box'>
            <label htmlFor='uppercase-letters'>Include Uppercase </label>
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
            />
          </div>

          <div className='Generator-Setting__box'>
            <label htmlFor='lowercase-letters'>Include Lowercase</label>
            <input
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
            />
          </div>

          <div className='Generator-Setting__box'>
            <label htmlFor='include-numbers'>Include Numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
            />
          </div>

          <div className='Generator-Setting__box'>
            <label htmlFor='include-symbols'>Include Symbols</label>
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
            />
          </div>
          <button className="Generator-Password__btn">GENERATE PASSWORD</button>

        </div>
      </div>  
    </div>
  );
}

export default App;
