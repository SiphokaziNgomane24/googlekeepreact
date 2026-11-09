import "./Note.css";
import Note from "./Note";

const Notes = (props) => {
    const { notes } = props;

    if(notes.length === 0){
        return (
            <p> notes you add appear here.</p>
        )
}
return (
    <div className="notes">
        {notes.length === 0 ? (
            <p> notes you add appear here.</p>
        ) : (
            notes.map((note) => (
                <Note key={note.id} note={note} />
            ))
        )}

    </div>
);
};