import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Prueba");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit Hecho");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form__group field">
        <input
          type="input"
          // value={inputValue}
          onChange={handleInputChange}
          placeholder="search gif"
        />
      </div>
    </form>
  );
};

export default AddCategory;
