import React from 'react';

// import { Container } from './styles';

import DragAndDrop from '../../components/DragAndDrop/Board/index';
import { DragAndDropProvider } from '../../Contexts/DragAndDropContext'


function BlankPage() {
  return (
    <DragAndDropProvider>
      <DragAndDrop /> 
    </DragAndDropProvider>
  );
}

export default BlankPage;