import { useState } from "react";

export default function App() {
  return (
    <>
      <h1 className="text-center bg-light py-4">Post Form</h1>
      <div className="container py-4 w-75">
        <h3 className="ms-2">Nuovo Post</h3>
        {/* FORM */}
        <form className="border p-4 rounded-4">
          {/* author */}
          <label className="form-label" htmlFor="author">
            Autore
          </label>
          <input name="author" className="form-control mb-2" type="text" id="author" />
          {/* title */}
          <label className="form-label" htmlFor="title">
            Titolo
          </label>
          <input name="title" className="form-control mb-2" type="text" id="title" />
          {/* text */}
          <label className="form-label" htmlFor="text">
            Testo del Post
          </label>
          <textarea className="form-control" id="text"></textarea>
          {/* public/private */}
          <div className="form-check my-3">
            <input className="form-check-input" type="checkbox" id="public-check" />
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
