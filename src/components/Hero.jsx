import profileImg from '../assets/Profile.png';

export default function Hero() {
  return (
    <section id="hero" style={styles.section}>
      <div style={styles.avatarWrapper}>
        <img
          src={profileImg}
          alt="Ian Janrick"
          style={styles.avatar}
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div style={styles.avatarFallback}>IJ</div>
      </div>

      <h1 style={styles.name}>Hi, I'm Ian Janrick</h1>

      <p style={styles.intro}>
        I'm a Information Technology student with a passion for building things on the web.
        I started coding out of curiosity and quickly fell in love with how a few lines of code
        can turn an idea into something real. I am exploring working on both the front-end and back-end,
        and I'm always looking for new challenges to sharpen my skills.
        I believe in writing clean, readable code and continuously learning from every project I take on.
      </p>

      <div style={styles.divider} />

      <div style={styles.card}>
        <h2>Biggest Accomplishment So Far</h2>
        <p>
          Built my first full React portfolio from scratch — learning component architecture,
          routing, and responsive design along the way. It was the project that made everything
          click and showed me what I'm capable of building independently.
        </p>
      </div>

      <div style={styles.card}>
        <h2>Interests &amp; Goals</h2>
        <p>
          I'm most interested in <strong style={{ color: 'var(--accent)' }}>full-stack web development</strong>.
          In the future I want to build real-world apps like task managers, e-commerce sites,
          or AI-integrated tools — and eventually contribute to open-source projects.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '60px 24px',
    maxWidth: 720,
    margin: '0 auto',
    textAlign: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    width: 160,
    height: 160,
    margin: '0 auto 24px',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid var(--accent)',
    display: 'block',
  },
  avatarFallback: {
    display: 'none',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'var(--accent-bg)',
    border: '3px solid var(--accent)',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    fontWeight: 600,
    color: 'var(--accent)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  name: {
    marginBottom: 16,
  },
  intro: {
    lineHeight: 1.7,
    maxWidth: 600,
    margin: '0 auto',
    color: 'var(--text)',
  },
  divider: {
    height: 1,
    background: 'var(--border)',
    margin: '40px auto',
    maxWidth: 400,
  },
  card: {
    background: 'var(--accent-bg)',
    border: '1px solid var(--accent-border)',
    borderRadius: 12,
    padding: '24px 28px',
    marginBottom: 20,
    textAlign: 'left',
  },
};