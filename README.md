# React useEffect Hook Unexpected Behavior

This repository demonstrates a common issue with the React `useEffect` hook: unintended infinite loops and how to resolve them.

The `bug.js` file showcases a scenario where the effect runs after every render, potentially causing an infinite loop.  The `bugSolution.js` file shows how to prevent this using the dependency array.