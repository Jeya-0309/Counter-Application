
import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [minReached, setMinReached] = useState(false);

    const handleIncrement = () => {
        setCount(count + 1);
        setMinReached(false);
    };

    const handleDecrement = () => {
        if (count === 0) {
            setMinReached(true);
            return;
        }

        setCount(count - 1);
        setMinReached(false);
    };

    const handleReset = () => {
        setCount(0);
        setMinReached(false);
    };

    return (
        <div className="counter">
            <h1>Counter Application</h1>

            <h2>{count}</h2>

            {minReached && (
                <p className="message">
                    Minimum limit reached
                </p>
            )}

            <div className="buttons">
                <button onClick={handleIncrement}>
                    Increment
                </button>

                <button onClick={handleDecrement}>
                    Decrement
                </button>

                <button onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;
