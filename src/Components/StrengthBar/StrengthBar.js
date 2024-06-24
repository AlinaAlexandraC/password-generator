import './StrengthBar.css';

const StrengthBar = ({ passwordStrength }) => {
    return (
        <div className="strength-bar">
            <div className='strength-title'>
                Strength
            </div>
            <div className='strength-bars'>
                <span>{passwordStrength?.power}</span>
            </div>
        </div>
    );
};

export default StrengthBar;