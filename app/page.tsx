import React from 'react';
import { Film, Clapperboard } from 'lucide-react';

const Card = ({ title, useClapper }) => {
  const Icon = useClapper ? Clapperboard : Film;

  return (
    <div style={styles.card}>
      <Icon size={28} style={styles.icon} />
      <h2 style={styles.title}>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Arrow functions 🎥</h1>
      <div style={styles.grid}>
        <Card title="Movietitle" />
        <Card title="Movie" useClapper />
        <Card title="Star Wars" />
        <Card title="Sinners" useClapper />
        <Card title="Megan 2.0" />
        <Card title="Avengers" useClapper />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
    color: '#111', // ensures all text is visible
  },
  header: {
    marginBottom: '1.5rem',
    fontSize: '2rem',
    color: '#111',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fefefe',
  },
  icon: {
    color: '#111',
  },
  title: {
    fontSize: '1.1rem',
    color: '#111',
    margin: 0,
  },
};

export default App;
