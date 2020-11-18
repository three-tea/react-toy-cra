import React from 'react';
import { responseData } from '../../utils/utils';

const ListTest1 = () => {
  const { contents } = responseData;

  return (
    <>
      <ul key={1}>
        {contents.map((item, index) => {
          const { id, name } = item;
          return (
            <li key={id} style={{ listStyle: 'none' }}>{name}</li>
          );
        })}
      </ul>
      <ul>{contents.map((item, index) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={2}>
        {contents.map((item) => {
          const { id, name } = item;
          return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
        })}
      </ul>
      <ul>{contents.map((item) => (<li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>))}</ul>

      <ul key={3}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return (
              <li key={id} style={{ listStyle: 'none' }}>{name}</li>
            );
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={4}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return (
              <li key={id} style={{ listStyle: 'none' }}>{name}</li>
            );
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={5}>
        {
          contents.map((item) => {
            return (
              <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>
            );
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={6}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return (
              <li key={id} style={{ listStyle: 'none' }}>
                {name}
              </li>
            );
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={7}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return (
              <li key={id} style={{ listStyle: 'none' }}>{name}</li>
            );
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={8}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return (
              <li key={id} style={{ listStyle: 'none' }}>{name}</li>
            );
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>
    </>
  );
};

export default ListTest1;