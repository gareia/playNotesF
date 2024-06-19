import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try{
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false);
    }catch(e){
      setLoading(false);
      setError(true);
    }
  }, []);
    
  //const [item, setItem] = React.useState(parsedItem);
  
  //otra forma de declarar funcion
  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
  }
  
  //return [item, saveItem];
  return {item, saveItem, loading, error};
}

export { useLocalStorage };