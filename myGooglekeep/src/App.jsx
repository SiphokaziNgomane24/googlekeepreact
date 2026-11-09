import { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';
import Form from './Components/form/Form';
import Notes from './Components/notes/notes';
import './App.css';

const starterNotes = [
  { id: 1, title: 'Welcome', text: 'This is a Google Keep-inspired note.' },
  { id: 2, title: 'Ideas', text: 'Ship the final version with a clean layout.' },
  { id: 3, title: 'Checklist', text: 'Review the dashboard, fix lint issues, and test the build.' },
];

function App() {
  const [notes] = useState(starterNotes);

  return (
    <div className="app-shell">
      <Navbar />
      <div className="content-shell">
        <Sidebar />
        <main className="main-panel">
          <Form />
          <Notes notes={notes} />
        </main>
      </div>
    </div>
  );
}

export default App;
