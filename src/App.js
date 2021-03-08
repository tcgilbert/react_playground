import "./App.css";
import { useMemo, useCallback, useState } from "react";
import Child from "./Child";

// useMemo, useCallback, React.memo examples
function App() {
    const [localNum, setLocalNum] = useState(0);
    const [childNum, setChildNum] = useState(0);
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const memoizedFunction = useCallback((num) => changeChildNum(num), []);
    const memoizedMax = useMemo(() => findMax(), [array, findMax]);
    function changeChildNum(newNumber) {
        setChildNum(newNumber);
    }

    function findMax() {
        console.log("Working");
        return Math.max(array);
    }

    return (
        <div className="App">
            <h1>Parent Component</h1>
            <p>Parent Number: {localNum}</p>
            <button onClick={() => setLocalNum((prev) => prev + 1)}>
                Increment parent number
            </button>
            <Child childNum={childNum} changeNum={memoizedFunction} />
            <h1>The max value is: {memoizedMax}</h1>
        </div>
    );
}

export default App;
