import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if(!localStorageItem){
      parsedItem = initialValue;
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
    
    const [item, setItem] = React.useState(parsedItem);
    
    //otra forma de declarar funcion
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    }
  
    return [item, saveItem];
}

export { useLocalStorage };