import { Card, Col, Button } from 'antd';

function FoodBox(props) {
    const { name, image, calories, servings } = props.food

    
    let totalCalories = calories * servings


    //funcionalidad para delete
    const deleteThisFood = () => {
    
      props.deleteFood(name)

    }

    return (
      <Col>
        <Card
          title={name}
          style={{ width: 230, height: 300, margin: 10}}
        >
          <img src={image} height={60} alt={name} />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {totalCalories} </b> kcal
          </p>
          <Button type="primary" onClick={deleteThisFood}> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;