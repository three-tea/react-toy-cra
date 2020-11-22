import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeStateByKey } from '../../modules/mTest';

const RayHookTest = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.get('test'), shallowEqual);

  var myName = 'hi';
  function myName() {
    console.log('myName()');
  }
  function yourName() {
    console.log('yourName()');
  }
  var yourName = 'bye';
  console.log(typeof myName);
  console.log(typeof yourName);

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

export default RayHookTest;