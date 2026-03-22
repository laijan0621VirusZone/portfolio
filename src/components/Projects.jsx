const projects = [
  {
    title: 'To-Do List App',
    desc: 'Simple task tracker with add, complete, and delete functionality.',
    role: 'Solo developer',
    tech: 'HTML, CSS, JavaScript',
  },
  {
    title: 'React Portfolio',
    desc: 'Personal portfolio built with React and Vite showcasing projects and skills.',
    role: 'Solo developer',
    tech: 'React.js, Vite, CSS Variables',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((proj) => (
          <div key={proj.title} style={styles.card}>
            <h3 style={styles.title}>{proj.title}</h3>
            <p style={{ color: 'var(--text)', margin: '8px 0 12px' }}>{proj.desc}</p>
            <p style={styles.meta}><strong>Role:</strong> {proj.role}</p>
            <p style={styles.meta}><strong>Tech:</strong> {proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 24px',
    maxWidth: 720,
    margin: '0 auto',
    background: 'var(--code-bg)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 20,
  },
  card: {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: '24px 20px',
    textAlign: 'left',
    boxShadow: 'var(--shadow)',
  },
  title: {
    margin: 0,
    color: 'var(--text-h)',
    fontSize: 18,
  },
  meta: {
    fontSize: 14,
    color: 'var(--text)',
    margin: '4px 0 0',
  },
};
