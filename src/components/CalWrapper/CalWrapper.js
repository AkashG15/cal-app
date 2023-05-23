import Button from "../../common/Button";
const CalWrapper = (props) =>{
   
    const {allButArr}=props;

const allButton= allButArr.map(
    (btObj) =>{  return <Button btName={btObj.value}  btFun={btObj.btFun}/> 
    
    });
    console.log(allButton);
    return(
        <div>
            {allButton}
        </div>
    )
};

export default CalWrapper;