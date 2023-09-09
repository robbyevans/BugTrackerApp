import React from "react";

interface IBug {
  id: number;
  description: string;
  resolved: boolean;
}

interface IBugsProps {
  bugs: IBug[];
  onUpdate: (bugId: number) => void;
  onDelete: (bugId: number) => void;
}

const BugsList: React.FC<IBugsProps> = ({ bugs, onUpdate, onDelete }) => {
  return (
    <div className="bug-list-container">
      <h2>Bug List</h2>
      <ul className="bug-list">
        {bugs.map((bug) => (
          <li key={bug.id} className="bug-item">
            <p>{bug.description}</p>
            <div className="button-container">
              <button onClick={() => onUpdate(bug.id)}>Update</button>
              <button onClick={() => onDelete(bug.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugsList;
