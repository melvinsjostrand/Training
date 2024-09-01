import React from 'react'
import categories from '../categories';

interface Props {
    onSelectCategory: (category: string) => void;
}


const ExpenseFilter = ({onSelectCategory}: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value=""> all categories</option>
      {categories.map((catergory) => (
        <option key={catergory} value={catergory}>{catergory}</option>
      ))}
    </select>
  );
}

export default ExpenseFilter