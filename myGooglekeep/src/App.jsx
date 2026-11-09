import { useEffect, useMemo, useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import Form from './Components/form/Form';
import Notes from './Components/notes/notes';
import './App.css';

const starterNotes = [
  { id: 1, title: 'Welcome', text: 'This is a Google Keep-inspired note.', tags: ['Getting started'], color: '#fff8d6', pinned: true },
  { id: 2, title: 'Ideas', text: 'Ship the final version with a clean layout.', tags: ['Work', 'Ideas'], color: '#e8f0fe', pinned: false },
  { id: 3, title: 'Checklist', text: 'Review the dashboard, fix lint issues, and test the build.', tags: ['Work'], color: '#e6f4ea', pinned: false },
];

function App() {
  const [notes, setNotes] = useState(starterNotes);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const updateTime = () => setCurrentTime(Date.now());
    updateTime();
    const timerId = window.setInterval(updateTime, 15000);
    return () => window.clearInterval(timerId);
  }, []);

  const filteredNotes = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase();
    return notes
      .filter((note) => (
        !query
        || [note.title, note.text, ...(note.tags ?? [])]
          .some((value) => value.toLocaleLowerCase().includes(query))
      ))
      .sort((first, second) => Number(second.pinned) - Number(first.pinned));
  }, [notes, searchTerm]);

  function addNote(note) {
    setNotes((currentNotes) => [{ ...note, id: crypto.randomUUID(), pinned: false }, ...currentNotes]);
  }

  function updateNote(noteId, updates) {
    setNotes((currentNotes) => currentNotes.map((note) => (
      note.id === noteId ? { ...note, ...updates } : note
    )));
  }

  function reorderNotes(draggedId, targetId) {
    setNotes((currentNotes) => {
      const sourceIndex = currentNotes.findIndex((note) => String(note.id) === draggedId);
      const targetIndex = currentNotes.findIndex((note) => String(note.id) === targetId);
      if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) {
        return currentNotes;
      }

      const reordered = [...currentNotes];
      const [draggedNote] = reordered.splice(sourceIndex, 1);
      const insertionIndex = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
      reordered.splice(insertionIndex, 0, draggedNote);
      return reordered;
    });
  }

  const dueReminders = notes.filter((note) => (
    note.reminderAt && new Date(note.reminderAt).getTime() <= currentTime
  ));

  return (
    <div className="app-shell" data-theme={darkMode ? 'dark' : 'light'}>
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((isDark) => !isDark)}
      />
      <div className="content-shell">
        <Sidebar />
        <main className="main-panel">
          {dueReminders.length > 0 && (
            <section className="reminder-banner" aria-label="Due reminders" role="status">
              <span className="material-symbols-outlined" aria-hidden="true">notifications_active</span>
              <div>
                <strong>Reminder due</strong>
                <ul>
                  {dueReminders.map((note) => (
                    <li key={note.id}>
                      {note.title || note.text}
                      <button
                        type="button"
                        onClick={() => updateNote(note.id, { reminderAt: null })}
                      >
                        Dismiss
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
          <Form onAddNote={addNote} />
          <Notes
            notes={filteredNotes}
            onUpdateNote={updateNote}
            onReorderNotes={reorderNotes}
            hasSearch={Boolean(searchTerm.trim())}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
