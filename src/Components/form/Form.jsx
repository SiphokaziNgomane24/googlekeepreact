import './Form.css';
import { useState } from 'react';
import noteColors from '../notes/noteColors';

function Form({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tagText, setTagText] = useState('');
  const [color, setColor] = useState(noteColors[0].value);
  const [reminder, setReminder] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim() && !text.trim()) {
      setError('Add a title or note before saving.');
      return;
    }

    onAddNote({
      title: title.trim(),
      text: text.trim(),
      tags: [...new Set(tagText.split(',').map((tag) => tag.trim()).filter(Boolean))],
      color,
      reminderAt: reminder ? new Date(reminder).toISOString() : null,
    });
    setTitle('');
    setText('');
    setTagText('');
    setColor(noteColors[0].value);
    setReminder('');
    setError('');
  }

  return (
    <div className="form-container">
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          id="note-title"
          type="text"
          className="note-title"
          placeholder="Title"
          aria-label="Note title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          id="note-text"
          type="text"
          className="note-text"
          placeholder="Take a note..."
          aria-label="Note text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <input
          id="note-tags"
          type="text"
          className="note-tags-input"
          placeholder="Category tags (comma-separated)"
          aria-label="Category tags, comma-separated"
          value={tagText}
          onChange={(event) => setTagText(event.target.value)}
        />
        <label className="reminder-input" htmlFor="note-reminder">
          <span className="material-symbols-outlined" aria-hidden="true">notifications</span>
          <span>Remind me</span>
          <input
            id="note-reminder"
            type="datetime-local"
            value={reminder}
            onChange={(event) => setReminder(event.target.value)}
          />
        </label>
        <div className="color-picker" role="group" aria-label="Choose note color">
          {noteColors.map((noteColor) => (
            <button
              key={noteColor.value}
              type="button"
              className={`color-swatch${color === noteColor.value ? ' selected' : ''}`}
              style={{ backgroundColor: noteColor.value }}
              aria-label={`${noteColor.name} note color`}
              aria-pressed={color === noteColor.value}
              title={noteColor.name}
              onClick={() => setColor(noteColor.value)}
            />
          ))}
        </div>
        <div className="form-actions">
          <div className="form-tools">
            <span className="material-symbols-outlined form-color-icon" aria-hidden="true">palette</span>
            <span className="form-hint">Choose a color and add optional tags</span>
          </div>
          <button className="save-btn" type="submit">Add note</button>
        </div>
        <p className="form-error" role="status">{error}</p>
      </form>
    </div>
  );
}

export default Form;