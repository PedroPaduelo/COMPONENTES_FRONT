import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';

import { Container } from './styles';

import { DragAndDropContext } from '../../../Contexts/DragAndDropContext'


import Card from "../Card"




function List({ data, indexList }) {

  const { moveItemDrop, cards } = useContext(DragAndDropContext);


 

  const [, dropRef] = useDrop({
    accept: "CARD",

    drop(item, monitor){
      const fromItem = item.fromItem;
      const fromList = item.fromList;
      const toList = indexList;
      let flagueMove = "LIST"

      if(toList === fromList )return;

      moveItemDrop(fromList,toList,fromItem,0,flagueMove)
      item.fromList = toList
    } 
  }) 




  return (
    <Container ref={dropRef} done={data.done}>

      <header>
        <h2>{data.title}</h2>     
      </header>




      <ul>
        {
          cards.map((card, index) => (<Card key={card.id} indexList={indexList} id_list={data.id} index={index} data={card}/>  ))
        }
      </ul>


    </Container>
  )
}

export default List;