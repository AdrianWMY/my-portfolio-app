import React, { useState } from 'react';

const ClickCount = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="bg-red-700" onClick={handleClick}>
      click me {count}
    </button>
  );
};

export default ClickCount;
