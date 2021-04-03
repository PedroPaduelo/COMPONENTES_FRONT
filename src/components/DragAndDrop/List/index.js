import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Container } from './styles';

import Card from "../Card"
import {DragAndDropContext} from '../Context/DragAndDropContext'






function List({ data, indexList }) {

  const { moveItemDrop } = useContext(DragAndDropContext);


  const [, dropRef] = useDrop({
    accept: "CARD",

    drop(item, monitor){

      // Dasdos do item 
      const fromItem = item.fromItem;
      const fromList = item.fromList;
      const toList = indexList;
      
      let flagueMove = "LIST_DROP"

      // Controle de movimento na mesma lista
      if(toList === fromList ){
        return;
      }
      
      // função de alteração de item
      moveItemDrop(fromList,toList,fromItem,flagueMove)

      // atualização do item
      item.fromList = toList

      console.log("DROP_BY_LIST")

    } 
  }) 




  return (
    <Container ref={dropRef} done={data.done}>

      <header>
        <h2>{data.title}</h2>     
      </header>




      <ul>
        {
          data.cards.map((card, index) => (<Card key={card.id} indexList={indexList} id_list={data.id} index={index} data={card}/>  ))
        }
      </ul>


    </Container>
  )
}

export default List;