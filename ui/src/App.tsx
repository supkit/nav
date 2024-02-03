import { FC } from 'react';

import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import Draggable from './Draggable';
import Droppable from './Droppable';

const App: FC = (any) => {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      <div style={{width: '100vw', height: 200, border: '1px solid #000000'}}>Go ahead, drag me.</div>
    </Draggable>
  );

  const handleDragEnd = (over: any) => {
    console.log(over);
    setParent(over ? over.active.id : null);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : <div style={{width: '100vw', height: 400, border: '1px solid #cccccc'}}>Here</div>}
      </Droppable>
    </DndContext>
  );
}

export default App;
