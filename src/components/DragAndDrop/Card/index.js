import React, {useContext, useRef} from 'react';
import { useDrag, useDrop } from "react-dnd";

import { DragAndDropContext } from '../../../Contexts/DragAndDropContext'

import { Container, Label } from './styles';






function Card({ data , index, indexList, id_list }) {

  const ref = useRef();
  const { moveItemHover } = useContext(DragAndDropContext);
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

      // De onde vem o item
      const fromItem = item.fromItem;
      const fromList = item.fromList;

      // Para onde vai o item
      const toList = indexList;
      const toItem = index;

      // Para onde vai o item
      const flagueMove = "CARD_HOVER"

      // Evita que tenha mudança com o memso card
      if(fromItem === toItem && fromList === toList ) {
        return;
      }

      // Pega o tamnha e o centro do card 
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = ( targetSize.bottom - targetSize.top )/2;

      // Pega o quanto um card esta encima do outro 
      const draggetOffcet = monitor.getClientOffset();
      const draggetTop = draggetOffcet.y - targetSize.top;


      // Valida se o Item e menor que o destino lista e a mesma e se não passou do centro
      if(fromItem < toItem && draggetTop < targetCenter && fromList === toList){
        return; 
      }

      // Valida se o Item e menor que o destino lista e a mesma e se não passou do centro
      if(fromItem > toItem && draggetTop > targetCenter && fromList === toList){
        return; 
      } 


      // Efetua a mudança dos cards
      moveItemHover(fromList,toList,fromItem,toItem,flagueMove)

      item.fromList = toList;
      item.fromItem = toItem;


      
      console.log("DROP_BY_CARD")
    }
    
  }) 




 dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging} >
      <header>
        {data.lebels && data.lebels.map(label => ( <Label key={label.id} color={label.content}></Label>))}
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