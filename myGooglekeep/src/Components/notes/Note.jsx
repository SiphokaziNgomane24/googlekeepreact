import './Note.css';

function Note({ note }) {
  return (
    <article className="note" aria-label={note.title}>
      {note.title ? <h3 className="title">{note.title}</h3> : null}
      <p className="text">{note.text}</p>
      <div className="note-footer">
        <span className="material-symbols-outlined hover small-icon">archive</span>
      </div>
    </article>
  );
}

export default Note;