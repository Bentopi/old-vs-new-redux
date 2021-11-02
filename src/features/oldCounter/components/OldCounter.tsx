import React, { useState } from "react";
import styles from "../styles/OldCounter.module.css";

export interface OldCounterProps {
  decrement: () => void;
  increment: () => void;
  incrementByAmount: (value: number) => void;
  incrementAsync: (value: number) => void;
  incrementIfOdd: (value: number) => void;
  count: number;
}

export const OldCounter = ({
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  count,
}: OldCounterProps) => {
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Classic Redux</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
