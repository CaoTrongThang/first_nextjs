"use client"

import React, { useEffect, useState } from 'react';

type NoteState = 'note' | 'in-progress' | 'completed';

interface NoteData {
  id: string;
  title: string;
  state: NoteState;
  content: string;
}

interface NoteComponentProps {
  note: NoteData;
  onDelete: (id: string) => void;
}

// i wanna add buttons on the top of the note component to change the state of the note, like the X button to delete the note, the check button to mark the note as completed, and the edit button to edit the note
function NoteComponent({ note, onDelete }: NoteComponentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation on mount
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`border border-orange-500 rounded-lg p-4 mb-4 transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="flex gap-2 flex-row justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Edit</button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Completed</button>
      </div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>Status: {note.state}</small>
    </div>
  );
}

const Note: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState<NoteData[]>([{
    id: '1',
    title: 'Sample Note',
    state: 'note',
    content: 'This is a sample note.'
  },
  {
    id: '2',
    title: 'Sample Note 2',
    state: 'note',
    content: 'This is a sample note 2.'
  },
  {
    id: '3',
    title: 'Sample Note 2',
    state: 'in-progress',
    content: 'This is a sample note 2.'
  },
  {
    id: '4',
    title: 'Sample Note 2',
    state: 'completed',
    content: 'This is a sample note 2.'
  }]);

  // Handler to delete a note by id
  const handleDeleteNote = (id: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  //I want to filter the notes based on the state
  const notesList = notes.filter(note => note.state === 'note');
  const inProgressNotes = notes.filter(note => note.state === 'in-progress');
  const completedNotes = notes.filter(note => note.state === 'completed');

  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      {/* notes list */}
      <div className="w-[500px] h-[500px] mx-auto p-4 border-orange-500 rounded-lg border-[2px] shadow-lg">
        {notesList.map(note => (
          <NoteComponent key={note.id} note={note} onDelete={handleDeleteNote} />
        ))}
      </div>
      {/**inprogress notes */}
      <div className="w-[500px] h-[500px] mx-auto p-4 border-orange-500 rounded-lg border-[2px] shadow-lg">
        {inProgressNotes.map(note => (
          <NoteComponent key={note.id} note={note} onDelete={handleDeleteNote} />
        ))}
      </div>

      {/* completed notes */}
      <div className="w-[500px] h-[500px] mx-auto p-4 border-orange-500 rounded-lg border-[2px] shadow-lg">
        {completedNotes.map(note => (
          <NoteComponent key={note.id} note={note} onDelete={handleDeleteNote} />
        ))}
      </div>
    </div>
  );
};

export default Note;
