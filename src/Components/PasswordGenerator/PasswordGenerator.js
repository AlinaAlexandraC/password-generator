import './PasswordGenerator.css';

const PasswordGenerator = ({ generatePassword }) => {
    return ( 
        <div onClick={generatePassword} className="password-generator">
            <div>Generate &rarr;</div>
        </div>
    );
}
 
export default PasswordGenerator;