const reflections = [
  {
    q: 'a. What technologies did you use and why?',
    a: `I used React.js with Vite as the build tool because React's component-based architecture makes it easy to organize and reuse UI pieces. I chose plain CSS variables for styling instead of a heavy library so I could understand the fundamentals of theming and dark mode. Git was used for version control to track changes throughout development.`,
  },
  {
    q: 'b. Which parts of the portfolio were easiest for you?',
    a: `The HTML structure and layout were the most straightforward. Writing the content sections like About Me and Skills felt natural because I already had a clear idea of what I wanted to say. Mapping over arrays to render repeated components like project cards also clicked quickly once I understood JSX.`,
  },
  {
    q: 'c. Which parts were most challenging?',
    a: `Setting up the project with Vite and understanding how React's component tree works was initially confusing. Getting the CSS variables to apply consistently across light and dark mode took some trial and error. Importing assets correctly through Vite's module system (instead of using plain file paths) was also a small but important hurdle.`,
  },
  {
    q: 'd. What technologies are you most interested in learning?',
    a: `I'm most interested in learning Node.js and Express for backend development, and MongoDB or Firebase for databases. I also want to go deeper into React — specifically React Router, the Context API, and eventually TypeScript for type-safe code. Deployment tools like Vercel and CI/CD pipelines are also on my list.`,
  },
  {
    q: 'e. What kind of applications do you want to build in the future?',
    a: `I want to build full-stack web applications that solve real problems — things like a task management system, an e-commerce platform, or a tool that integrates AI features like smart search or recommendations. Eventually, I'd like to contribute to open-source projects and build something that other developers or everyday users find genuinely useful.`,
  },
];

export default function Reflection() {
  return (
    <section id="reflection" style={styles.section}>
      <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Reflection</h2>
      <div style={styles.stack}>
        {reflections.map((r) => (
          <div key={r.q} style={styles.card}>
            <h3 style={styles.title}>{r.q}</h3>
            <p style={{ color: 'var(--text)', lineHeight: 1.7, marginTop: 8 }}>{r.a}</p>
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
  stack: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  card: {
    background: 'var(--accent-bg)',
    border: '1px solid var(--accent-border)',
    borderRadius: 12,
    padding: '24px 28px',
    textAlign: 'left',
  },
  title: {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
    color: 'var(--accent)',
  },
};
