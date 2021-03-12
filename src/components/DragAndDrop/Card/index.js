import React, {useContext, useRef} from 'react';

import { useDrag, useDrop } from "react-dnd";

import BoardContext from '../Board/context'


import { Container, Label } from './styles';

function Card({ data , index, indexList, id_list }) {
  

  const ref = useRef();
  const { moveItemHover } = useContext(BoardContext);
  const id = data.id


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

  const [, dropRef] = useDrop({
    accept: "CARD",

    hover(item, monitor){
      const fromItem = item.fromItem;
      const fromList = item.fromList;
      const toList = indexList;
      const toItem = index;

      const flagueMove = "CARD"
      
      const draggedListIndex =  item.fromList;
      const targetListIndex = indexList;

      const draggedIndex = item.fromItem;
      const targetIndex = index;

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex ) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = ( targetSize.bottom - targetSize.top )/2;
      
      const draggetOffcet = monitor.getClientOffset();
      const draggetTop = draggetOffcet.y - targetSize.top;

      if(draggedIndex < targetIndex && draggetTop < targetCenter && draggedListIndex === targetListIndex)return; 
      if(draggedIndex > targetIndex && draggetTop > targetCenter && draggedListIndex === targetListIndex)return; 

      moveItemHover(fromList,toList,fromItem,toItem,flagueMove)

        item.fromList = toList;
        item.fromItem = index;

    },

    drop(item, monitor){


      const draggedListIndex =  item.fromList;
      const targetListIndex = indexList;

      const draggedIndex =  item.fromItem;
      const targetIndex = index;

      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex ) return;

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = ( targetSize.bottom - targetSize.top )/2;
      
      const draggetOffcet = monitor.getClientOffset();
      const draggetTop = draggetOffcet.y - targetSize.top;

      if(draggedIndex < targetIndex && draggetTop < targetCenter && draggedListIndex === targetListIndex)return; 
      if(draggedIndex > targetIndex && draggetTop > targetCenter && draggedListIndex === targetListIndex)return; 







      //const flagueMove = "CARD"

      //moveItemDrop(fromList,toList,fromItem,toItem,flagueMove)

     

    } 

  }) 

 dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging} >
      <header>
        {data.label  &&
        
        data.label.map(label => ( <Label key={label.id} color={label.content} /> ))}
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