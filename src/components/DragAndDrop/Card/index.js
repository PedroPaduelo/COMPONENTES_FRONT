import React, {useContext, useRef} from 'react';
import { useDrag, useDrop } from "react-dnd";

import { DragAndDropContext } from '../../../Contexts/DragAndDropContext'

import { Container, Label } from './styles';








function Card({ data , index, indexList, id_list }) {

  const ref = useRef();
  const { moveItemHover, moveItemDrop } = useContext(DragAndDropContext);
  const id = data.id





  // possibilita a função de pegar e arrastar. 
  const [{isDragging}, dragRef] = useDrag({
    item: {
      type: "CARD", 
      fromItem: index, 
      fromList: indexList, 
      id_list, 
      id
    },

    collect: monitor =>  ({
      isDragging: monitor.isDragging(),  
    })

  })



  // possibilita a largar o item
  const [, dropRef] = useDrop({
    accept: "CARD",

    
    hover(item, monitor){

      const fromItem = item.fromItem;
      const fromList = item.fromList;
      const toList = indexList;
      const toItem = index;

      const flagueMove = "CARD_HOVER"




      const draggedListIndex =  item.fromList;
      const targetListIndex = indexList;

      const draggedIndex = item.fromItem;
      const targetIndex = index;


      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex ) {
        return;
      }



      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = ( targetSize.bottom - targetSize.top )/2;

      // console.log(targetCenter)
      
      const draggetOffcet = monitor.getClientOffset();
      const draggetTop = draggetOffcet.y - targetSize.top;

      // console.log(draggetTop)


      if(draggedIndex < targetIndex && draggetTop < targetCenter && draggedListIndex === targetListIndex){
        return; 
      }

      if(draggedIndex > targetIndex && draggetTop > targetCenter && draggedListIndex === targetListIndex){
        return; 
      } 

      moveItemHover(fromList,toList,fromItem,toItem,flagueMove)


      
      item.fromList = indexList;
      item.fromItem = index;




      console.log("DROP_BY_CARD")
    },





    // drop(item, monitor){


    //   const draggedListIndex =  item.fromList;
    //   const targetListIndex = indexList;

    //   const draggedIndex =  item.fromItem;
    //   const targetIndex = index;

    //   const fromList = item.fromList;
    //   const toList = indexList;
    //   const fromItem = item.fromItem;
    //   const toItem = index;

    //   const flagueMove = "CARD_DROP"


    //   if(draggedIndex === targetIndex && draggedListIndex === targetListIndex ) return;

    //   const targetSize = ref.current.getBoundingClientRect();
    //   const targetCenter = ( targetSize.bottom - targetSize.top )/2;
      
    //   const draggetOffcet = monitor.getClientOffset();
    //   const draggetTop = draggetOffcet.y - targetSize.top;

    //   if(draggedIndex < targetIndex && draggetTop < targetCenter && draggedListIndex === targetListIndex)return; 
    //   if(draggedIndex > targetIndex && draggetTop > targetCenter && draggedListIndex === targetListIndex)return; 



      
    //   moveItemDrop(fromList,toList,fromItem,toItem,flagueMove)
    //   item.fromList = toList;
    //   item.fromItem = index;

    //   console.log(flagueMove)

    // } 

  }) 




 dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging} >
      <header>
        {data.lebels && data.lebels.map(label => ( <Label key={label.id} color={label.content} /> ))}
      </header>

      <p> 
        {data.content}
      </p>

      {data.user && 
        <img src={data.user} alt="" />  
      }

    </Container>
  )
}

export default Card;