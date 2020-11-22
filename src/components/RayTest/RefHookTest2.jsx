import React, { useEffect, useState } from 'react';

const RefHookTest2 = () => {
  const [inputRef, setInputRef] = useState(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
    }
  }, [inputRef]);

  return (
    <div>
      <input
        type="text"
        ref={(element) => setInputRef(element)}
      />
    </div>
  );
};

export default RefHookTest2;