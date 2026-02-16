import { useState } from "react";
import axios from "axios";

// Valori di base del form
const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: false,
};

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [postSuccess, setPostSuccess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  // Handler
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
    setShowLoading(true);
    // chiamata POST
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((res) => {
      console.log("Post Caricato: ", res.data);
      // svuoto i campi e mostro l'alert
      setFormData(initialFormData);
      setShowLoading(false);
      setPostSuccess(true);
      // dopo 3 secondi si nasconde l'alert
      setTimeout(() => {
        setPostSuccess(false);
      }, 3000);
    });
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
            value={formData.body}
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
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-primary" disabled={showLoading}>
              Carica Post
            </button>
            {showLoading && (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </form>
        {/* ALERT */}
        {postSuccess && (
          <div className="alert alert-success w-75 mx-auto mt-4 text-center" role="alert">
            Post caricato con successo!
          </div>
        )}
      </div>
    </>
  );
}
