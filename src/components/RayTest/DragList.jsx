import React, { useMemo, useRef } from 'react';
import { responseData } from '../../utils/utils';
import useDragList from '../../hook/useDragList';

/**
 * 드래그 가능한 타겟에서 발생한 이벤트
 */
// onDragStart - 요소를 끌기 시작했을 때
// onDrag - 요소를 끌 때
// onDragEnd - 요소의 드래그를 완료했을 때

/**
 * 드롭 타겟에서 발생한 이벤트
 */
// onDragEnter - 끌어온 요소가 드롭 타겟에 들어갔을 때
// onDragOver - 드래그 한 요소가 드롭 타겟 위에 있을 때
// onDragLeave - 드래그 한 요소가 드롭 타겟을 벗어날 때
// onDrop - 끌어 놓은 요소가 드롭 타겟에 드롭될 때
// Array.from(listRef.current.children).indexOf(e.target)

const DragList = () => {
  const { contents } = responseData;
  const listRef = useRef(null);

  const listStyle = useMemo(
    () => ({
      border: '1px solid',
      paddingTop: 5,
      background: 'rgba(255,100,100,0.5)',
    }),
    [],
  );

  const {
    handleDragStart,
    handleDragEnd,
    handleDragEnter,
    handleDragOver,
    handleDrop,
    list,
    movingIndex,
  } = useDragList({
    contents,
    listRef,
  });

  return (
    <div style={{ padding: 100 }}>
      <ul
        ref={listRef}
        style={listStyle}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {
          list && list.map((item, index) => {
            const { id, name } = item;
            return (
              <li
                key={id}
                className="drop_target"
                style={{
                  listStyle: 'none',
                  height: 50,
                  lineHeight: '50px',
                  marginRight: 35,
                  border: '1px solid',
                  marginBottom: 5,
                  background: movingIndex === index ? 'rgba(0,255,0,0.3)' : undefined,
                }}
                draggable={true}
              >
                {movingIndex === index ? '' : name}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default DragList;