import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleOnChangeName = ({ target }) => setName(target.value);
  const handleOnChangeCuisine = ({ target }) => setCuisine(target.value);
  const handleOnChangePhoto = ({ target }) => setPhoto(target.value);
  const handleOnChangeIngredients = ({ target }) =>
    setIngredients(target.value);
  const handleOnChangePreparation = ({ target }) =>
    setPreparation(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              {" "}
              <input
                id="name"
                placeholder="Name"
                required="true"
                type="text"
                name="name"
                style={{ width: "120px" }}
                value={name}
                onChange={handleOnChangeName}
              ></input>
            </td>
            <td>
              {" "}
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                style={{ width: "120px" }}
                value={cuisine}
                required="true"
                onChange={handleOnChangeCuisine}
              ></input>
            </td>
            <td>
              {" "}
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="Photo"
                style={{ width: "120px" }}
                value={photo}
                required="true"
                onChange={handleOnChangePhoto}
              ></input>
            </td>
            <td>
              {" "}
              <textarea
                id="ingredients"
                type="textarea"
                name="ingredients"
                rows={3}
                style={{ width: "300px" }}
                placeholder="Ingredients"
                value={ingredients}
                required="true"
                onChange={handleOnChangeIngredients}
              ></textarea>
            </td>
            <td>
              {" "}
              <textarea
                id="preparation"
                type="textarea"
                name="preparation"
                rows={3}
                placeholder="Preparation"
                style={{ width: "300px" }}
                value={preparation}
                required="true"
                onChange={handleOnChangePreparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
