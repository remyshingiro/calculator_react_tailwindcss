import { useState } from "react";
import { performCalculation } from "./calculatorLogic";

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNextValue, setWaitingForNextValue] = useState(false);

  const buttons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  const getBtnStyle = (btn) => {
    const base = 'h-20 text-2xl font-medium transition-all active:brightness-125 flex items-center justify-center ';
    if (['+', '-', 'x', '÷', '='].includes(btn)) return base + 'bg-orange-500 text-white';
    if (['AC', '+/-', '%'].includes(btn)) return base + 'bg-zinc-400 text-black';
    return base + 'bg-zinc-300 text-black';
  };

  const handleNumber = (digit) => {
    if (waitingForNextValue) {
      setCurrentValue(digit);
      setWaitingForNextValue(false);
    } else {
      setCurrentValue(currentValue === '0' ? digit : currentValue + digit);
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(currentValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator && !waitingForNextValue) {
      const result = performCalculation(previousValue, inputValue, operator);
      setCurrentValue(String(result));
      setPreviousValue(result);
    }

    setWaitingForNextValue(true);
    setOperator(nextOperator);
  };

  const handleClear = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNextValue(false);
  };

  const handleEqual = () => {
    if (!operator || previousValue === null) return;

    const result = performCalculation(previousValue, currentValue, operator);
    setCurrentValue(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNextValue(true);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-[320px] bg-black overflow-hidden shadow-2xl rounded-[40px] p-1">
        
        
        <div className="flex items-end justify-end px-6 py-10 h-40">
          <span className="text-white text-7xl font-light tracking-tighter">
            {currentValue}
          </span>
        </div>
        
        <div className="grid grid-cols-4 gap-px bg-zinc-800 rounded-b-[40px] overflow-hidden">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`${getBtnStyle(btn)} ${btn === "0" ? "col-span-2" : ""}`}
              onClick={() => {
                if (!isNaN(btn) || btn === ".") handleNumber(btn);
                else if (["+", "-", "x", "÷"].includes(btn)) handleOperator(btn);
                else if (btn === "=") handleEqual();
                else if (btn === "AC") handleClear();
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;