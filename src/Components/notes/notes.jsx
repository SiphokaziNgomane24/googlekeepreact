import './Note.css';
import Note from './Note';

const Notes = ({ notes = [], onUpdateNote, onReorderNotes, hasSearch = false }) => {
  if (notes.length === 0) {
    return (
      <p className="empty-state">
        {hasSearch ? 'No notes match your search.' : 'Notes you add appear here.'}
      </p>
    );
  }

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onUpdateNote={onUpdateNote}
          onReorderNotes={onReorderNotes}
        />
      ))}
    </div>
  );
};

export default Notes;