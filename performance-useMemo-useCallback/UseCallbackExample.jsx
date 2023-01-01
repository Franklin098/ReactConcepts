import React,{useState, memo, useCallback} from 'react'
// memo is a high order component, since it receives a component and returns a new one.

export const ReactMemoExample = () => {
  const [num, setNum] = useState(10);
  const [logValue, setLogValue] = useState('');

  // useCallback memoized the entire function, only re-creates the function
  // if a value from the dependency array changes.
  const onClickLog = useCallback(()=>{
    console.log(logValue);
  },[logValue]);


  return (
    <>
      <input type="number" value={num} onChange={event => setNum(parseInt(event.target.value))} />
      <input type='text' value={logValue} onChange={event => setLogValue(event.target.value)} />

    {/* we are passing a function:  ()=> console.log(logValue) as a prop to MyButton.
      Functions in JS have their own memory address, so in each re-render
      we are creating always a NEW function and that's why MyButton is always
      re-rendering again. 
      
      <MyButton onClick={()=> console.log(logValue)}>
        Log Value
      </MyButton> 
      
      */}


      {/* Since MyButton is using React.Memo and the onClick prop is using useCallback
      to create a memoized function, then the props are not changing,
      so React.memo is not going to re-render the component again. */}
      <MyButton onClick={onClickLog}>
        Log Value
      </MyButton> 


    </>
  );
}

// React.memo: if the props have not change, then use the previous version of the component
// avoid re-renderings.
const MyButton = memo((props) => {
  console.log('Rendering MyButton');

  // Let's say MyButton is a very slow to render.
  const startTime = new Date();
  while(new Date - startTime < 3000){}

  return <button {...props} style={{color:'red'}}/>
});
