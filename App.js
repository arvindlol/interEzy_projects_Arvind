import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    const now = new Date();
    const defaultDate = new Date(now.getTime() + 86400000).toISOString().split('T')[0];
    const defaultTime = now.toTimeString().slice(0, 5);

    const finalDate = date || defaultDate;
    const finalTime = time || defaultTime;

    if (task.trim() === '') return;

    setTasks([...tasks, {
      id: Date.now(),
      text: task,
      date: finalDate,
      time: finalTime
    }]);

    setTask('');
    setDate('');
    setTime('');
  };

  return (
    <div className="container">
      <h1>📝 My React To-Do App</h1>
      <p className="tagline">Plan your day. Stay productive!</p>

      <input
        type="text"
        placeholder="✍️ What do you need to do?"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <div className="datetime">
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <button onClick={handleAdd}>➕ Add Task</button>

      <ul>
  {tasks.map((t) => (
    <li
      key={t.id}
      onClick={() => {
        const updated = tasks.map(task =>
          task.id === t.id ? { ...task, done: !task.done } : task
        );
        setTasks(updated);
      }}
      className={t.done ? 'done' : ''}
    >
      <span>{t.text}</span>
      <small>📅 {t.date} 🕒 {t.time}</small>
    </li>
  ))}
</ul>

    </div>
  );
}

export default App;
