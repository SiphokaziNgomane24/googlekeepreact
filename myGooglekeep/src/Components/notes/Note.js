import Note from "./note.css";
const title= "some title";
const text= "some text";
function Note() {
    return (
        <>
        <div className ="empty-state" style={{ display: "none" }}></div>
      <div className ="notes"></div>

      <div className ="modal">
        <div className ="modal-content">
          <div className ="form-container">
            <form className ="form" id="modal-form">
              <input
                type="text"
                className ="note-title"
                id="modal-title"
                placeholder="Title"
              />
              <input
                id="modal-text"
                type="text"
                className ="note-text"
                placeholder="Take a note..."
              />
              <div className ="form-actions">
                <div className ="icons">
                  <div className ="tools">
                    <span className ="material-symbols-outlined hover small-icon"
                      >add_alert</span
                    >
                    <span className ="tools-text">Remind me</span>
                  </div>
                  <div className ="tools">
                    <span className ="material-symbols-outlined hover small-icon"
                      >person_add</span
                    >
                    <span className ="tools-text">Collaborator</span>
                  </div>
                  <div className ="tools">
                    <span className ="material-symbols-outlined hover small-icon"
                      >palette</span
                    >
                    <span className ="tools-text">Change Color</span>
                  </div>
                  <div className ="tools">
                    <span className ="material-symbols-outlined hover small-icon"
                      >image</span
                    >
                    <span className ="tools-text">Add Image</span>
                  </div>
                  <div className ="tools">
                    <span className ="material-symbols-outlined hover small-icon"
                      >archive</span
                    >
                    <span className ="tools-text">Archive</span>
                  </div>
                  <div className ="tools">
                    <span className ="material-symbols-outlined hover small-icon"
                      >more_vert</span
                    >
                    <span className ="tools-text">More</span>
                  </div>
                  <div className ="tools">
                    <span className ="material-symbols-outlined hover small-icon"
                      >undo</span
                    >
                    <span className ="tools-text">Undo</span>
                  </div>
                  <div className ="tools">
                    <span className ="material-symbols-outlined hover small-icon"
                      >redo</span
                    >
                    <span className ="tools-text">Redo</span>
                  </div>
                </div>
                <button className ="close-btn" id="modal-btn" type="button">close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    )
}
export default Note;