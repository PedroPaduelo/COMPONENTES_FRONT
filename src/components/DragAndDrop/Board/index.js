import React , { useContext } from 'react';

import { Container } from './styles';
import List from "../List"

import {DragAndDropContext} from '../Context/DragAndDropContext'

function Board() {
  
  const { 
    lists
  } = useContext(DragAndDropContext);

  return (
    <Container>
        {lists.map((itenlist , index)=> (<List  key={itenlist.title} indexList={index} data={itenlist} />))}
    </Container>
  )
}

export default Board;