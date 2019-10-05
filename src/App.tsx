import React, {useState} from "react";
import './App.scss';
import Button from './components/Button';
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import {evaluate} from 'mathjs'

const App = () => {
    const [input, setInput] = useState("");

    const addToInput = (val: string): void  => {
        setInput(input + val);
    }

    return (
        <div className="App">
            <div className="calc-wrapper">
                <div className="row">
                    <Input input={input}/>
                </div>
                <div className="row">
                    <Button onClickHandler={addToInput}>7</Button>
                    <Button onClickHandler={addToInput}>8</Button>
                    <Button onClickHandler={addToInput}>9</Button>
                    <Button onClickHandler={addToInput}>/</Button>
                </div>
                <div className="row">
                    <Button onClickHandler={addToInput}>4</Button>
                    <Button onClickHandler={addToInput}>5</Button>
                    <Button onClickHandler={addToInput}>6</Button>
                    <Button onClickHandler={addToInput}>*</Button>
                </div>
                <div className="row">
                    <Button onClickHandler={addToInput}>1</Button>
                    <Button onClickHandler={addToInput}>2</Button>
                    <Button onClickHandler={addToInput}>3</Button>
                    <Button onClickHandler={addToInput}>+</Button>
                </div>
                <div className="row">
                    <Button onClickHandler={addToInput}>.</Button>
                    <Button onClickHandler={addToInput}>0</Button>
                    <Button onClickHandler={() => setInput(evaluate(input))}>=</Button>
                    <Button onClickHandler={addToInput}>-</Button>
                </div>
                <div className="row">
                    <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
                </div>
            </div>
        </div>
    );
}

export default App;
