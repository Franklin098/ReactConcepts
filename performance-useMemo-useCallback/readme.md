# React Performance

React provides a couple of useful hooks in order to improve performance.

Whe can inprove performance in a couple of ways:

</br>

1. Reduce the **amount of time** before rendering something. To acomplish this, we must avoid executing an expensive or slow function in order to render the result value.

**useMemo** helps here **by memoizing the return value** of a function. It helps to avoid re-executing an expensive or slow function again, instead it returns a memoized value if the values in the dependency array are the same.

useMemo is not a cache, if you return to a previous value, it still executes the function to calculate the value again, but it really helps to avoid re-executing the function on every re-render when it is not necessary. We only execute the function again if the input/dependency value changes.

> Go to UseMemoExmaple.jsx for a demo.

<br></br>

2. Actually reduce the **number** of re-renders.

**useCallback** helps here **by memoizing an entire function**. A function in Javascript has its own memory address (like a normal variable) so in every re-render we always create a **new** function, the problem is if we pass in that function as a prop to a child component, then we'll end up re-rendering the child component too many times, just because the callback function memory address changed.

**React.memo** also helps in improving performance **by memoizing an entire component.** Basically it says 'if the props of this component haven't changed, then don't re-render the component again'. This is specially useful if a component is very slow to render, like a component doing a heavy processing or an API call, we don't want do re-rendering if it is not necessary.

Sometimes you'll need to use React.memo and useCallback together in order to avoid useless re-renderings of a component and improve performance.

> Go to ReactMemoExample.jsx for a demo.
> </br>
> Go to UseCallbackExample.jsx for a demo.

<br></br>

3. Use Lazy imports, this helps you with very slow initial rendering (like the first time you load or re-load a web page). When a component is very slow to render, you can split your project in chunks, and import in an asynchronous way.

React will only actually import the component when you need it. So using lazy imports in the Routes components actually makes a lot of sense.

The Suspense component is a wrapper component that helps you to render something else while the actual lazy component is loading.

```
import {lazy, Suspense} from 'react';

const MyButton = lazy(()=> import('./MyButton));

// ... more code

<Suspense fallback={<p> Loading... </p>}>
    <MyButton></MyButton>
</Suspense>
```
