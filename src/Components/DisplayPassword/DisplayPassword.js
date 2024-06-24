import './DisplayPassword.css'

const DisplayPassword = ({ password }) => {
    return ( 
        <div className="display-password">
            <div>{password}</div>
        </div>
    );
}
 
export default DisplayPassword;