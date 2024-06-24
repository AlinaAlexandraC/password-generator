import './PasswordGenerator.css';

const PasswordGenerator = ({ generatePassword, errorLabel }) => {
    return ( 
        <div>
            <div onClick={generatePassword} className="password-generator">Generate &rarr;</div>
            {errorLabel != "" &&
                <label htmlFor="generate" className='error-label'>{errorLabel}</label>
            }
        </div>
    );
}
 
export default PasswordGenerator;