import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
    //controladores
    const [nameInput, setNameInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const [caloriesInput, setCaloriesInput] = useState(0)
    const [servingsInput, setServingsInput] = useState(0)

    //funciones onChange
    const handdleChangeName = (event) => {
        let userInput = event.target.value
        setNameInput(userInput)
    }
    const handdleChangeImage = (event) => {
        let userInput = event.target.value
        setImageInput(userInput)
    }
    const handdleChangeCalories = (event) => {
        let userInput = event.target.value
        setCaloriesInput(userInput)
    }
    const handdleChangeServings = (event) => {
        let userInput = event.target.value
        setServingsInput(userInput)
    }

    //funcion para pasar la info del componente child al componente father
    const addNewFood = (event) => {
        event.preventDefault()
        const newFood = {
            name: nameInput,
            calories: caloriesInput,
            image: imageInput,
            servings: servingsInput
        }
        props.addFood(newFood)
    }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={nameInput} type="text" onChange={handdleChangeName} />

      <label>Image</label>
      <Input value={imageInput} type="text" onChange={handdleChangeImage} />

      <label>Calories</label>
      <Input value={caloriesInput} type="text" onChange={handdleChangeCalories} />

      <label>Servings</label>
      <Input value={servingsInput} type="text" onChange={handdleChangeServings} />

      <button onClick={addNewFood}>Create</button>
    </form>
  );
}

export default AddFoodForm;