import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    props.filteredFood(event.target.value);
  };
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" value={searchInput} onChange={handleChange} />
    </div>
  );
}

export default Search;
