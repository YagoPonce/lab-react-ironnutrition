import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';

function App() {
//creamos state control de la lista general, así como una copia para poder desarrollar la función de Search
const [ foodList, setFoodList ] = useState(foods)
const [ foodListView, setFoodListView ] = useState(foods)

//actualizar lista con elementos añadidos, tanto del state original como de la copia
const addFood = (newFood) => {
  const foodListCopy = [...foodList];
  foodListCopy.push(newFood)
  setFoodList(foodListCopy)

  const foodListViewCopy = [...foodListView];
  foodListViewCopy.push(newFood)
  setFoodListView(foodListViewCopy)
}

// código para la funcionalidad de Search
const filteredFood = (filteredQuery) => {
  console.log("filteredQuery", filteredQuery)
  const filteredArr = foodListView.filter((eachFood) => {
    return eachFood.name.includes(filteredQuery)
  })
  setFoodListView(filteredArr)
}

//  Iteración 6 funcionalidad Delete
const deleteFood = (foodToDelete) => {
  const foodListViewCopy = [...foodListView];
  foodListViewCopy.filter((eachFood) => {
    return eachFood.name.includes(!foodToDelete)
  })
  setFoodListView(foodListViewCopy)
}



  return (
    <div className="App">
   
        <AddFoodForm addFood={addFood}/>

          <Search filteredFood={filteredFood}/>
        <h2>Food List</h2>
      
        
        
        
            <Row style={{ width: '100%', justifyContent: 'center' }}>
        
            {foodListView.map((eachFood) => {
        return (
          <div key={eachFood.name+eachFood.calories}>
           {/* Iteración 1 
            <h3>{eachFood.name}</h3>
            <img src={eachFood.image} alt={eachFood.name} width={150}/> */}

            {/* Iteración 2 */}
            <FoodBox food={eachFood} deleteFood={deleteFood}/>

        </div>
        )
      })}
          </Row>

      


    </div>
  );
}

export default App;
