import React, { useContext, useState } from "react";
import noteContext from "../../../Context/noteContext";
import "./AddNote.style.css";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const context = useContext(noteContext);
  const { addnote } = context;
  const twoInOne = () => {
    addnote(note.title, note.description, note.tag);
    props.togglePop();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      {props.pop && (
        <div className="popup" style={{ zIndex: 11111 }}>
          <div className="popup-inner  d-flex">
            <form action="" method="post">
              <span className="cancel-icon">
                <i
                  className="fas fa-window-close"
                  onClick={props.togglePop}
                ></i>
              </span>
              <div className="form-row my-2">
                <div className="col-12">
                  <input
                    type="text"
                    onChange={onChange}
                    className="addInput form-control"
                    name="title"
                    id="title"
                    placeholder="title"
                    required
                  />
                </div>
              </div>
              <div className="form-row my-2">
                <div className="col-12">
                  <input
                    type="text"
                    onChange={onChange}
                    name="tag"
                    id="tag"
                    className="addInput form-control"
                    placeholder="tag"
                  />
                </div>
              </div>
              <div className="form-row my-2">
                <div className="col-12">
                  <textarea
                    name="description"
                    onChange={onChange}
                    id="description"
                    cols="60"
                    rows="10"
                    className="addInput form-control"
                    placeholder="write descrption here"
                    required
                    minLength={3}
                  ></textarea>
                </div>
              </div>
              <div className="form-row text-center my-3">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: "var(--yellow)" }}
                    onClick={twoInOne}
                    disabled={!note.title && note.description.length < 3}
                  >
                    Save & Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddNote;
