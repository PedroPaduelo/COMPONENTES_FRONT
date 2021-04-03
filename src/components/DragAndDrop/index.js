import React from 'react';

import DragAndDrop from './Board/index';
import { DragAndDropProvider } from './Context/DragAndDropContext'


function BlankPage() {
  return (
    <DragAndDropProvider>
      <DragAndDrop /> 
    </DragAndDropProvider>
  );
}

export default BlankPage;