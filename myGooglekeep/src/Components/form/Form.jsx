import './Form.css';

function Form() {
  return (
    <div className="form-container">
      <form className="form" id="form">
        <input
          id="note-title"
          type="text"
          className="note-title"
          placeholder="Title"
        />
        <input
          id="note-text"
          type="text"
          className="note-text"
          placeholder="Take a note..."
        />
        <div className="form-actions">
          <div className="icons">
            <div className="tools">
              <span className="material-symbols-outlined hover small-icon">add_alert</span>
              <span className="tools-text">Remind me</span>
            </div>
            <div className="tools">
              <span className="material-symbols-outlined hover small-icon">person_add</span>
              <span className="tools-text">Collaborator</span>
            </div>
            <div className="tools">
              <span className="material-symbols-outlined hover small-icon">palette</span>
              <span className="tools-text">Change Color</span>
            </div>
            <div className="tools">
              <span className="material-symbols-outlined hover small-icon">image</span>
              <span className="tools-text">Add Image</span>
            </div>
            <div className="tools">
              <span className="material-symbols-outlined hover small-icon">archive</span>
              <span className="tools-text">Archive</span>
            </div>
            <div className="tools">
              <span className="material-symbols-outlined hover small-icon">more_vert</span>
              <span className="tools-text">More</span>
            </div>
            <div className="tools">
              <span className="material-symbols-outlined hover small-icon">undo</span>
              <span className="tools-text">Undo</span>
            </div>
            <div className="tools">
              <span className="material-symbols-outlined hover small-icon">redo</span>
              <span className="tools-text">Redo</span>
            </div>
          </div>
          <button className="close-btn" type="submit">Close</button>
        </div>
      </form>
    </div>
  );
}

export default Form;