import Input from "./input"

function display (inputCount,inputText){
    const inputs = [];
    const inputsText = [];
    for (let i=0; i<inputCount; i++){
        inputsText.push(inputText[i])
        inputs.push(<Input key={i} placeholder={inputText[i]}/>)
    }
    return inputs;
}

export default function Accordion({title, inputCount, inputText}){
    return(
        <div>
        <h3>{title}</h3>
        {display(inputCount, inputText)}
        </div>
    );
}