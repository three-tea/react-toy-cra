import React, { useEffect, useState } from 'react';

const LifecycleHookTest = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('componentDidMount()');
    return () => {
      console.log('componentWillUnmount()');
    };
  }, [value]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>LifecycleHookTest</div>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LifecycleHookTest;