```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when the component mounts and unmounts
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    console.log('Count:', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```