import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeStateByKey } from '../../modules/mTest';

const RayTest = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.get('test'), shallowEqual);
  console.log('name:', name);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(changeStateByKey('name', e.target.value))}
      />
      <div>{name} Welcome.</div>
    </>
  );
};

export default RayTest;