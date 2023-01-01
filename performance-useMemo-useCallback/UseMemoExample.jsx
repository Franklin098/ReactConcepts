import React,{useState,useMemo} from 'react'

export const UseMemoExample = () => {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');

  // executes fib() again only and only if 'num' changes (not in every re-render).
  const fibValue = useMemo(()=> fib(num),[num]);
  // useMemo is not a cache, if we return 'num' to a previous value, it still executes fib() again.

  return (
    <>
      {/* 
      Low performance: calculating fib() again in each re-render is expensive and slow

      Note that 'logValue' can change and 'num' still be the same, we don't want to re-execute
      the fib() function again in that case. We just want to re-execute fib() only if 'num' changes.

      <h1>
        Fib {num} is {fib(num)}
      </h1> 
      
      */}


      <h1>
        Fib {num} is {fibValue}
      </h1>

      <input type="number" value={num} onChange={event => setNum(parseInt(event.target.value))} />
      <input type='text' value={logValue} onChange={event => setLogValue(event.target.value)} />
    </>
  );
}


function fib(n) {
  // this is an Expensive and Slow function
  if (n === 2) return 1;
  if (n === 1) return 0;
  return fib(n - 1) + fib(n - 2);
}