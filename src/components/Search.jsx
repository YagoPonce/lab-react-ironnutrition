import { Divider, Input } from 'antd';
import { useState } from 'react';


// Iteration 5
function Search(props) {
    console.log("props", props)


    const [ searchInput, setSearchInput ] = useState("")

    const handleChange = (event) => {
        setSearchInput(event.target.value)
        props.filteredFood(event.target.value)
        console.log("probando", event.target.value)
    }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" value={searchInput}  onChange={handleChange} />
    </>
  );
}

export default Search;