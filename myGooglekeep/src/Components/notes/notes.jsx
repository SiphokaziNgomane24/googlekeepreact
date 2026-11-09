import './Note.css';
import Note from './Note';

const Notes = ({ notes = [] }) => {
  if (notes.length === 0) {
    return <p className="empty-state">Notes you add appear here.</p>;
  }

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;