import React, { useState, useEffect } from "react";

const Clock = () => {
  const [ghadi, setGhadi] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: true })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setGhadi(new Date().toLocaleTimeString("en-US", { hour12: true }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="text-3xl bg">Time </h1>
      <h2>{ghadi}</h2>
    </div>
  );
};

export default Clock;
