import { useState } from "react";

function ProductForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    const valErrors = {};
    if (!name) {
      valErrors.name = "Name is required.";
    }
    if (!image) {
      valErrors.image = "Image URL is required.";
    }
    if (!price) {
      valErrors.price = "Price is required.";
    } else if (price && price < 0) {
      valErrors.price = "Price cannot be less than 0.";
    }
    if (!description) {
      valErrors.description = "Description is required.";
    }
    if (!email) {
      {
        valErrors.email = "Email is required.";
      }
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      valErrors.email = "Invalid email format.";
    }
    setErrors(valErrors);
    return Object.keys(valErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      const formData = {
        name: name,
        image: image,
        price: price,
        description: description,
        email: email,
      };
      alert(JSON.stringify(formData));
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        {errors.name && <span>* {errors.name}</span>}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        {errors.image && <span>* {errors.image}</span>}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </label>
        {errors.price && <span>* {errors.price}</span>}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
        {errors.description && <span>* {errors.description}</span>}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        {errors.email && <span>* {errors.email}</span>}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
