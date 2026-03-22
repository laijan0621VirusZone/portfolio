export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={{ color: 'var(--text-h)', fontWeight: 500 }}>Ian Janrick</p>
      <p style={{ fontSize: 14, marginTop: 4 }}>
        Cebu City, Philippines · Built with React + Vite
      </p>
      <div style={styles.links}>
        <a href="https://github.com/laijan0621VirusZone" style={styles.link} target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" style={styles.link} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <p style={{ fontSize: 13, marginTop: 16, opacity: 0.5 }}>
        © {new Date().getFullYear()} Ian Janrick
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid var(--border)',
    padding: '40px 24px',
    textAlign: 'center',
    color: 'var(--text)',
    marginTop: 'auto',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: 24,
    marginTop: 12,
  },
  link: {
    color: 'var(--accent)',
    textDecoration: 'none',
    fontSize: 15,
  },
};
