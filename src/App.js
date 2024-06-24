import './App.css';
import * as React from 'react';
import FormPassword from '../src/Components/FormPassword/FormPassword';
import DisplayPassword from './Components/DisplayPassword/DisplayPassword';

function App() {
  const [length, setLength] = React.useState(8);
  const [includeUppercase, setIncludeUppercase] = React.useState(false);
  const [includeLowercase, setIncludeLowercase] = React.useState(false);
  const [includeNumbers, setIncludeNumbers] = React.useState(false);
  const [includeSymbols, setIncludeSymbols] = React.useState(false);
  const [password, setPassword] = React.useState('P4$5W0rD!');
  const [passwordStrength, setPasswordStrength] = React.useState();

  const generatePassword = () => {
    if (
      length > 0 &&
      (includeLowercase || includeNumbers || includeSymbols || includeUppercase)
    ) {
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const numberChars = "0123456789";
      const symbolChars = "!@#$%^&*()_+{}|:\"<>?-=[]\\;',./";
      let charPool = "";
      if (includeUppercase) charPool += uppercaseChars;
      if (includeLowercase) charPool += lowercaseChars;
      if (includeNumbers) charPool += numberChars;
      if (includeSymbols) charPool += symbolChars;
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool.charAt(randomIndex);
      }
      if (
        (includeUppercase && !/[A-Z]/.test(password)) ||
        (includeLowercase && !/[a-z]/.test(password)) ||
        (includeNumbers && !/\d/.test(password)) ||
        (includeSymbols &&
          !/[!@#$%^&*()_+{}|:"<>?=\-[\]\\';,./]/.test(password))
      ) {
        return generatePassword();
      }
      setPassword(password);
    }
  };

  const checkPasswordStrength = () => {
    let passwordStrengthValidator = 0;
    if (includeUppercase) {
      passwordStrengthValidator++;
    }
    if (includeLowercase) {
      passwordStrengthValidator++;
    }
    if (includeNumbers) {
      passwordStrengthValidator++;
    }
    if (includeSymbols) {
      passwordStrengthValidator++;
    }
    if (length > 8) {
      passwordStrengthValidator++;
    }
    if (passwordStrengthValidator < 3) {
      setPasswordStrength({
        power: "Weak",
      })
    } else if (passwordStrengthValidator < 4) {
      setPasswordStrength({
        power: "Medium",
      })
    } else {
      setPasswordStrength({
        power: "Strong",
      })
    }
  };

  React.useEffect(() => {checkPasswordStrength()}, [includeUppercase, includeLowercase, includeNumbers, includeSymbols, length]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='app-title'>Password Generator</div>
        <DisplayPassword password={password} />
        <FormPassword length={length} setLength={setLength} setIncludeUppercase={setIncludeUppercase} setIncludeLowercase={setIncludeLowercase} setIncludeNumbers={setIncludeNumbers} setIncludeSymbols={setIncludeSymbols} password={password} setPassword={setPassword} generatePassword={generatePassword} passwordStrength={passwordStrength} />
      </header>
    </div>
  );
}

export default App;
