const skillGroups = [
  { label: 'Languages', items: 'HTML, CSS, JavaScript' },
  { label: 'Frameworks', items: 'React.js' },
  { label: 'Tools', items: 'Git, VS Code, Vite' },
  { label: 'Styling', items: 'Tailwind CSS, CSS Variables' },
];

export default function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Skills</h2>
      <div style={styles.grid}>
        {skillGroups.map(({ label, items }) => (
          <div key={label} style={styles.card}>
            <h3 style={styles.label}>{label}</h3>
            <p style={{ color: 'var(--text)', marginTop: 6 }}>{items}</p>
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
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: 16,
  },
  card: {
    background: 'var(--accent-bg)',
    border: '1px solid var(--accent-border)',
    borderRadius: 10,
    padding: '20px 16px',
    textAlign: 'center',
  },
  label: {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
    color: 'var(--accent)',
  },
};
