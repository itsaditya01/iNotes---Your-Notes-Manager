import React from "react";
import { useState, useContext, useEffect } from "react";
import AddNote from "./AddNote/AddNote.component";
import noteContext from "../../Context/noteContext";
import Notes from "./Notes/Notes.component";
import { useNavigate } from "react-router";
import "./Notebook.style.css";

function Notebook() {
  let navigate = useNavigate();
  let num = 0;
  const [nav1, setNav1] = useState(false);
  const context = useContext(noteContext);
  const { notes, getallnotes, loading, searchedString } = context;
  const [pop, setpop] = useState(false);
  console.log(notes, ": notes");
  const togglePop = () => {
    if (pop === true) {
      setpop(false);
    }
    if (pop === false) {
      setpop(true);
    }
  };
  const handleScroll = () => {
    if (window.pageYOffset > 25) {
      if (!nav1) setNav1(true);
    } else {
      if (nav1) setNav1(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getallnotes();
    } else {
      navigate("/about");
    }
  }, []);
  return (
    <div className="notebook">
      <div className="container">
        <div
          className={`${
            nav1 ? "notebook-header" : "notebook-header-active"
          } d-flex my-3 align-items-center`}
        >
          <div className="title-inner w-100 ms-4">
            <h4 style={{ textAlign: "left" }}>All Notes</h4>
          </div>
          <div className="addnew flex-shrink-1 me-4">
            <span className="addnew-icon">
              <i
                className="fas fa-plus-circle fa-2x"
                onClick={() => setpop(true)}
              ></i>
            </span>
          </div>
        </div>
        {pop && <AddNote pop={pop} togglePop={togglePop} />}
        <div className="row">
          {notes.length !== 0
            ? notes
                .filter((note) => {
                  if (searchedString === "") {
                    return note;
                  } else if (
                    note.tag
                      .toLowerCase()
                      .includes(searchedString.toLowerCase())
                  ) {
                    return note;
                  } else if (
                    note.title
                      .toLowerCase()
                      .includes(searchedString.toLowerCase())
                  ) {
                    return note;
                  }
                })
                .map((note) => {
                  return (
                    <div
                      key={num++}
                      className="col-sm-12 col-md-6 col-12 col-lg-4"
                    >
                      <Notes
                        key={note._id}
                        title={note.title}
                        description={note.description}
                        tag={note.tag}
                        id={note._id}
                      />
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
      {loading ? (
        <div className="nonedisplay">
          <img
            src="./loader6.gif"
            alt="loading"
            className="py-10"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      ) : (
        ""
      )}
      {notes.length === 0 && !loading ? (
        <div className="">
          {notes.length === 0 && (
            <div className="nonedisplay">
              <h4>No notes to display</h4>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Notebook;
