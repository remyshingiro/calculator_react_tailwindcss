import React, {useState} from "react";

function App() {
  const [currentValue, setCurrentValue] = ('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNextValue, setWaitingForNextValue] = useState(false);

  const getBtnStyle = (btn) => {
    const base = 'h-20 text-2xl font-medium transition-all active:brightness-125';
    if(['+', '-', 'x', '➗', '='].includes(btn)) return base + 'bg-orange-500 text-white';
    if(['AC', '+/-', '%'].includes(btn)) return base + 'bg-zinc-400 text-black';

    return base + 'bg-zinc-300 text-black';
  };


  const buttons = [
    'AC', '+/-', '%', '÷',
     '7', '8', '9', 'x',
     '4', '5', '6', '-',
     '0', '.', '='
  ];

  const handleNumber = (digit) => {
    if (waitingForNextValue) {
      setCurrentValue(digit);
      setWaitingForNextValue(false);
    } else {
      setCurrentValue(currentValue === '0' ? digit : currentValue + digit);
    }
  };
  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-[320px] bg-black overflow-hidden shadow-2xl rounded-3xl">

        <div className="flex items-end justify-end px-6 py-8 h-32">
          <span className="text-white text-6xl font-light tracking-tight">
            {display}

          </span>
        </div>

        <div className="grid grid-cols-4 gap-[1px] bg-zinc-800">
          {buttons.map((btn) => (
            <button 
              key={btn}
              className="{`${getBtnStyle(btn)} ${btn === '0' ? 'col-span-2' : ''}`} "
            >
              {btn}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}
export default App;