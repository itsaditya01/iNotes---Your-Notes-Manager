import React from "react";
import "./ViewNote.style.css";

function ViewNote(props) {
  console.log(props.description);
  return (
    <>
      {props.view && (
        <div className="popup" style={{ zIndex: 1111 }}>
          <div className="popup-inner  d-flex">
            <form action="" method="post">
              <span className="cancel-icon">
                <i
                  className="fas fa-window-close"
                  onClick={props.toggleView}
                ></i>
              </span>
              <div className="form-row mb-3">
                <div className="col-12">
                  <div className="view_note_wrapper">
                    <h6 className="view_note" name="Title">
                      Title
                    </h6>
                  </div>
                  <input
                    type="text"
                    value={props.title}
                    className="addInput popup_note_details form-control"
                    name="title"
                    id="title"
                    placeholder="title"
                    readOnly
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="col-12">
                  <div className="view_note_wrapper">
                    <h6 className="view_note" name="Title">
                      Tag
                    </h6>
                  </div>
                  <input
                    type="text"
                    value={props.tag}
                    name="tag"
                    id="tag"
                    className="addInput popup_note_details form-control"
                    placeholder="tags"
                    readOnly
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12">
                  <div className="view_note_wrapper">
                    <h6 className="view_note" name="Title">
                      Description
                    </h6>
                  </div>
                  <textarea
                    name="description"
                    value={props.description}
                    id="description"
                    cols="60"
                    rows="15"
                    className="addInput popup_note_details form-control"
                    placeholder="write descrption here"
                    readOnly
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewNote;
