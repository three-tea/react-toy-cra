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

      <ul key={9}>
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

      <ul key={10}>
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

      <ul key={11}>
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

      <ul key={12}>
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

      <ul key={13}>
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

      <ul key={14}>
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

      <ul key={15}>
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

      <ul key={16}>
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

      <ul key={17}>
        {contents.map((item) => {
          const { id, name } = item;
          return (
            <li key={id} style={{ listStyle: 'none' }}>{name}</li>
          );
        })}
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={18}>
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

      <ul key={19}>
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

      <ul key={20}>
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

      <ul key={21}>
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

      <ul key={22}>
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

      <ul key={23}>
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

      <ul key={24}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={25}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={26}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={27}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={28}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={29}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={30}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={31}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={32}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={33}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={34}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={35}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={36}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={37}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={38}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={39}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={40}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={41}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={42}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={43}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={44}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={45}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={46}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={47}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={48}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={49}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>

      <ul key={50}>
        {
          contents.map((item) => {
            const { id, name } = item;
            return <li key={id} style={{ listStyle: 'none' }}>{name}</li>;
          })
        }
      </ul>
      <ul>{contents.map((item) => <li key={item.get('id')} style={{ listStyle: 'none' }}>{item.get('name')}</li>)}</ul>
    </>
  );
};

export default ListTest1;