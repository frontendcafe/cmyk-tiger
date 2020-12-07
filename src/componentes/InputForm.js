import React, { useState } from "react";

export const InputForm = () => {
  const [valorInput, setValorInput] = useState();

  const handleInputChange = (e) => {
    setValorInput(e.target.value);
  };

  return (
    <div>
      <input
        name="pelicula"
        type="text"
        value={valorInput}
        onChange={handleInputChange}
      />
    </div>
  );
};
