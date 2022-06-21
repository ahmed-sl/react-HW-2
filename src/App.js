import "./App.css";
import Input from "./components/Input";
import Operations from "./components/Operations";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const onChangeNumber1 = (e) => {
    console.log(e.target.value);
    setNumber1(parseInt(e.target.value));
  };
  const onChangeNumber2 = (e) => {
    console.log(e.target.value);
    setNumber2(parseInt(e.target.value));
  };
  const onClickSum = () => {
    setTotal(number1 + number2);
  };
  const onClickSub = () => {
    setTotal(number1 - number2);
  };
  const onClickMult = () => {
    setTotal(number1 * number2);
  };
  const onClickDiv = () => {
    setTotal(number1 / number2);
  };
  const onClickPers = () => {
    setTotal(number1 % number2);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Calculater</h1>
        <Input
          onChangeNumber1={onChangeNumber1}
          onChangeNumber2={onChangeNumber2}
        />
        <Operations
          onClickSum={onClickSum}
          onClickSub={onClickSub}
          onClickMult={onClickMult}
          onClickDiv={onClickDiv}
          onClickPers={onClickPers}
        />
        <Result total={total} />
      </div>
    </>
  );
}

export default App;
