import Button from './Button';
import Display from './Display';
import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
    'C',
  ];

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {buttons.map((btn, i) => {
          let extraClass = '';
          if (btn === 'C') extraClass = 'clear';
          else if (btn === '=') extraClass = 'equal';
          else if (['/', '*', '-', '+'].includes(btn)) extraClass = 'operator';

          return (
            <Button
              key={i}
              value={btn}
              onClick={handleClick}
              className={extraClass}
            />
          );
        })}
      </div>
    </div>
  );
}
