import React , {useState} from 'react' ;
import './App.css';
import{ numbers, upperCaseLetters, lowerCaseLetters, specialCharacters} from './characters';

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(32)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const generatePassword = (e) =>{
    let characterList = '';

    if (includeLowercase){
      characterList = characterList + lowerCaseLetters
    };
    if (includeUppercase) {
      characterList = characterList + upperCaseLetters
    };
    if (includeNumbers) {
      characterList = characterList + numbers
    };
    if (includeSymbols) {
      characterList = characterList + specialCharacters
    };
    setPassword(createPassword(characterList));
  }

  const createPassword = (characterList) => {
    let password = '';
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  }
  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
  }

  const copyPassword = (e) => {
      copyToClipboard()
  
  }

  return (
    <div className="App">
      <div className="Generator-Container">
        <div className="Generator-Container__Content">
          <h2 className="Generator-Header__Title">Password Generator</h2>
          <div className="Generator-Password__Wrapper">
            <h3 className="Password-Wrapper__Title">{password}</h3>
            <button onClick={copyPassword} className="Password-Coppy__btn">
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
          <button onClick={generatePassword} className="Generator-Password__btn">GENERATE PASSWORD</button>

        </div>
      </div>  
    </div>
  );
}

export default App;
