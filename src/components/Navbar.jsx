export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <span style={styles.brand}>Ian Janrick</span>
      <ul style={styles.links}>
        {[['About', 'hero'], ['Skills', 'skills'], ['Projects', 'projects'], ['Reflection', 'reflection']].map(([label, id]) => (
          <li key={id}>
            <a href={`#${id}`} style={styles.link}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 32px',
    background: 'var(--bg)',
    borderBottom: '1px solid var(--border)',
    backdropFilter: 'blur(8px)',
  },
  brand: {
    fontWeight: 600,
    fontSize: 18,
    color: 'var(--text-h)',
  },
  links: {
    display: 'flex',
    gap: 28,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'var(--text)',
    textDecoration: 'none',
    fontSize: 15,
    transition: 'color 0.2s',
  },
};
