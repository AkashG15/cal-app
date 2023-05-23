import "./Button.css"

const Button = (props) =>{
    
  const {btName , btFun}=props;

    return(
        <div>
            <button className="bt1" onClick={btFun}> 
            {btName}
            </button>
    
        </div>
    )
};
export default Button;