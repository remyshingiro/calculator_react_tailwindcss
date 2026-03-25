import React, {useState} from "react";

function App() {
  const [display, setDisplay] = useState('0');

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

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-[320px] bg-black overflow-hidden shadow-2xl rounded-3xl">
        

      </div>
    </div>
  )
}