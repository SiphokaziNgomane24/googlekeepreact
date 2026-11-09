import './Note.css';
import { useState } from 'react';
import noteColors from './noteColors';

function Note({ note, onUpdateNote, onReorderNotes }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const nextColor = noteColors[
    (noteColors.findIndex((color) => color.value === note.color) + 1) % noteColors.length
  ];

  function handleDrop(event) {
    event.preventDefault();
    setIsDragOver(false);
    const draggedId = event.dataTransfer.getData('text/plain');
    if (draggedId) onReorderNotes(draggedId, String(note.id));
  }

  return (
    <article
      className={`note${isDragOver ? ' drag-over' : ''}`}
      aria-label={note.title || 'Untitled note'}
      aria-roledescription="draggable note"
      draggable="true"
      data-default-color={note.color === '#ffffff' || !note.color ? 'true' : 'false'}
      style={{ '--note-background': note.color ?? '#ffffff' }}
      onDragStart={(event) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', String(note.id));
      }}
      onDragOver={(event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
      onDragEnd={() => setIsDragOver(false)}
    >
      <span className="material-symbols-outlined note-drag-handle" aria-hidden="true">drag_indicator</span>
      <button
        className={`pin-button${note.pinned ? ' is-pinned' : ''}`}
        type="button"
        aria-label={note.pinned ? 'Unpin note' : 'Pin note'}
        aria-pressed={Boolean(note.pinned)}
        title={note.pinned ? 'Unpin note' : 'Pin note'}
        onClick={() => onUpdateNote(note.id, { pinned: !note.pinned })}
      >
        <span className="material-symbols-outlined">{note.pinned ? 'keep' : 'keep_off'}</span>
      </button>
      {note.title ? <h3 className="title">{note.title}</h3> : null}
      <p className="text">{note.text}</p>
      {note.tags?.length > 0 && (
        <ul className="note-tags" aria-label="Categories">
          {note.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      )}
      {note.reminderAt && (
        <div className="note-reminder">
          <span className="material-symbols-outlined" aria-hidden="true">notifications</span>
          <time dateTime={note.reminderAt}>
            {new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' })
              .format(new Date(note.reminderAt))}
          </time>
        </div>
      )}
      <div className="note-footer">
        <button
          className="note-action"
          type="button"
          aria-label={`Change color to ${nextColor.name}`}
          title={`Change color to ${nextColor.name}`}
          onClick={() => onUpdateNote(note.id, { color: nextColor.value })}
        >
          <span className="material-symbols-outlined">palette</span>
        </button>
      </div>
    </article>
  );
}

export default Note;