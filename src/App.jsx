import { useState } from "react";

// Valori di base del form
const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false,
};

export default function App() {
  const [formData, setFormData] = useState(initialFormData);

  // handler
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // onSubmit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Post Caricato");
  };

  return (
    <>
      <h1 className="text-center bg-light py-4">Post Form</h1>
      <div className="container py-4 w-75">
        <h3 className="ms-2">Nuovo Post</h3>
        {/* FORM */}
        <form onSubmit={handleFormSubmit} className="border rounded-4 p-4">
          {/* author */}
          <label className="form-label" htmlFor="author">
            Autore
          </label>
          <input
            value={formData.author}
            onChange={handleFormChange}
            name="author"
            //
            className="form-control mb-2"
            type="text"
            id="author"
            required
          />
          {/* title */}
          <label className="form-label" htmlFor="title">
            Titolo
          </label>
          <input
            value={formData.title}
            onChange={handleFormChange}
            name="title"
            //
            className="form-control mb-2"
            type="text"
            id="title"
            required
          />
          {/* text */}
          <label className="form-label" htmlFor="text">
            Testo del Post
          </label>
          <textarea
            value={formData.text}
            onChange={handleFormChange}
            name="body"
            //
            className="form-control"
            id="body"
            required
          ></textarea>
          {/* public/private */}
          <div className="form-check my-3">
            <input
              onChange={handleFormChange}
              checked={formData.public}
              name="public"
              //
              className="form-check-input"
              type="checkbox"
              id="public-check"
            />
            <label className="form-check-label" htmlFor="public-check">
              Post pubblico
            </label>
          </div>
          {/* submit */}
          <button className="btn btn-primary">Carica Post</button>
        </form>
      </div>
    </>
  );
}
