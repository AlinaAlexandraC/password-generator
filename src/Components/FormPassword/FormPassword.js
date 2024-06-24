import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './FormPassword.css';
import StrengthBar from '../StrengthBar/StrengthBar';
import PasswordGenerator from '../PasswordGenerator/PasswordGenerator';

export default function SliderSizes({ includeUppercase, setIncludeUppercase, includeLowercase, setIncludeLowercase, includeNumbers, setIncludeNumbers, includeSymbols, setIncludeSymbols, generatePassword, length, setLength, checkPasswordStrength, passwordStrength }) {
    return (
        <div className="form-password">
            <div className='char-length'>
                <span>Character Length</span>
                <div className='length'>{length}</div>
            </div>
            <div className='slider'>
                <Box sx={{ width: 300 }}>
                    <Slider onChange={(e) => setLength(e.target.value)} max={20} defaultValue={8} aria-label="Default" valueLabelDisplay="auto" />
                </Box>
            </div>
            <div className='password-checkbox'>
                <div>
                    <input onChange={(e) => setIncludeUppercase(e.target.checked)} type="checkbox" id="uppercase" name="uppercase" />
                    <label>Include Uppercase Letters</label>
                </div>
                <div>
                    <input onChange={(e) => setIncludeLowercase(e.target.checked)} type="checkbox" id="lowercase" name="lowercase" />
                    <label>Include Lowercase Letters</label>
                </div>
                <div>
                    <input onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" id="numbers" name="numbers" />
                    <label>Include Numbers</label>
                </div>
                <div>
                    <input onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" id="symbols" name="symbols" />
                    <label>Include Symbols</label>
                </div>
            </div>
            <StrengthBar includeUppercase={includeUppercase} includeLowercase={includeLowercase} includeNumbers={includeNumbers} includeSymbols={includeSymbols} passwordStrength={passwordStrength} />
            <PasswordGenerator generatePassword={generatePassword} />
        </div>
    );
}