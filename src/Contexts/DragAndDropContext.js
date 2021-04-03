import React, { useState, useEffect, createContext } from 'react';
import produce  from 'immer'

import api from '../services/api';

const DragAndDropContext = createContext();

const list = [
  {
    "id": 1,
    "title": "Pendente",
    "creatable": "10/03/2021",
    "done": 0,
    "cards": [
      {
        "id": 1,
        "order_id": 1,
        "content": "TESTE 1",
        "user": "https://avatars.githubusercontent.com/u/37857002?s=460&u=e865d59b45cd0caa12923ddc5df3dc424e1ca5b7&v=4",
        "lebels":[
          {
            "content": "#696969",
            "desc": "Urgente"
          },
          {
            "content": "#191970",
            "desc": ""
          },
          {
            "content": "#FFA500",
            "desc": ""
          }
        ],
        "checklist": []

      },
      {
        "id": 2,
        "order_id": 2,
        "content": "TESTE 2",
        "user": "https://avatars.githubusercontent.com/u/37857002?s=460&u=e865d59b45cd0caa12923ddc5df3dc424e1ca5b7&v=4",
        "lebels":[
          {
            "content": "#FF0000"
          },
          {
            "content": "#FF0000"
          }
        ],
        "checklist": []
      },
      {
        "id": 3,
        "order_id": 3,
        "content": "TESTE 3",
        "user": "https://avatars.githubusercontent.com/u/37857002?s=460&u=e865d59b45cd0caa12923ddc5df3dc424e1ca5b7&v=4",
        "lebels":[
          {
            "content": "#DAF7A6"
          },
          {
            "content": "#FF5733"
          }
        ],
        "checklist": []
      },
      {
        "id": 5,
        "order_id": 4,
        "content": "TESTE 3",
        "user": "https://avatars.githubusercontent.com/u/37857002?s=460&u=e865d59b45cd0caa12923ddc5df3dc424e1ca5b7&v=4",
        "lebels":[
          {
            "content": "#DAF7A6"
          },
          {
            "content": "#FF5733"
          }
        ],
        "checklist": []
      },
      {
        "id": 6,
        "order_id": 5,
        "content": "TESTE 3",
        "user": "https://avatars.githubusercontent.com/u/37857002?s=460&u=e865d59b45cd0caa12923ddc5df3dc424e1ca5b7&v=4",
        "lebels":[
          {
            "content": "#DAF7A6"
          },
          {
            "content": "#FF5733"
          }
        ],
        "checklist": []
      }
    ]
  },

  {
    "id": 2,
    "title": "Em andamento",
    "creatable": "10/03/2021",
    "done": 0,
    "cards": []
  },

  {
    "id": 3,
    "title": "Concluído",
    "creatable": "10/03/2021",
    "done": 1,
    "cards": [
      {
        "id": 4,
        "order_id": 1,
        "content": "Demanda de softwear",
        "user": "https://avatars.githubusercontent.com/u/37857002?s=460&u=e865d59b45cd0caa12923ddc5df3dc424e1ca5b7&v=4",
        "lebels":[{

        }]
      }
    ]
  }
]


function DragAndDropProvider({ children }) {

  const [ lists, setLists ] = useState([]);

  useEffect(() => {
    setLists(list)
  }, []);





  async function moveItemDrop( fromList, toList, fromItem, flagueMove ){

    if(flagueMove === "LIST_DROP"){

      const auxiLists = produce(lists, draft=>{
        const dragged = draft[fromList].cards[fromItem]
        draft[fromList].cards.splice(fromItem, 1);
        draft[toList].cards.push(dragged);
      })


      let cardLists = []
      auxiLists[toList].cards.forEach(function (item, indice, array) {
        cardLists.push({
            id: item.id,
            order_id: indice,
            list_id: auxiLists[toList].id
          }
        )
      }); 


      setLists(auxiLists);
    }
  }

  async function moveItemHover( fromList, toList, fromItem, toItem, flagueMove){

    if(flagueMove === "CARD_HOVER"){

      const auxiLists = produce(lists, draft=>{
        const dragged = draft[fromList].cards[fromItem]
        draft[fromList].cards.splice(fromItem, 1);
        draft[toList].cards.splice(toItem, 0, dragged);
      })

      let cardLists = []
      auxiLists[toList].cards.forEach(function (item, indice, array) {
        cardLists.push({
            id: item.id,
            order_id: indice,
            list_id: auxiLists[toList].id
          }
        )
      }); 

      setLists(auxiLists);
    }

  }


  async function registra(card){

    await  api
      .post(`/cards`, card)
      .then((response) => {
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
    });  
 


    await api
      .get("/lists")
      .then((response) => {
      setLists(response.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
    });    
  }

  return (
    <DragAndDropContext.Provider value={{ 
      moveItemDrop,
      moveItemHover,
      registra,
  
      lists
    }}>
      {children}
    </DragAndDropContext.Provider>
  );
}

export { DragAndDropContext, DragAndDropProvider };