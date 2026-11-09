import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-item active-item" data-view="notes">
        <span className="material-symbols-outlined hover active">lightbulb</span>
        <span className="sidebar-text">Notes</span>
      </div>
      <div className="sidebar-item" data-view="reminders">
        <span className="material-symbols-outlined hover">notifications</span>
        <span className="sidebar-text">Reminders</span>
      </div>
      <div className="sidebar-item" data-view="labels">
        <span className="material-symbols-outlined hover">edit</span>
        <span className="sidebar-text">Edit Labels</span>
      </div>
      <div className="sidebar-item" data-view="archive">
        <span className="material-symbols-outlined hover">archive</span>
        <span className="sidebar-text">Archive</span>
      </div>
      <div className="sidebar-item" data-view="trash">
        <span className="material-symbols-outlined hover">delete</span>
        <span className="sidebar-text">Trash</span>
      </div>
    </aside>
  );
}

export default Sidebar;