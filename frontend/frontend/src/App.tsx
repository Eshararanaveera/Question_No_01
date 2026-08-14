import './App.css'
import CircleCalculator from "./components/CircleCalculator";


function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Java Practical Exam - 2026</h1>
        <p style={styles.headerSubtitle}>
          React (Vite + TypeScript) Frontend &nbsp;|&nbsp; Spring Boot Backend
        </p>
      </header>

      <main style={styles.main}>
   <CircleCalculator/>
      </main>

      <footer style={styles.footer}>
        <p>Good luck! 🍀</p>
      </footer>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5f6fa",
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    color: "#1f2937",
  },
  header: {
    textAlign: "center",
    padding: "28px 20px",
    backgroundColor: "#1f2937",
    color: "#ffffff",
    borderBottom: "4px solid #2563eb",
  },
  headerTitle: {
    margin: 0,
    fontSize: "28px",
    fontWeight: 600,
  },
  headerSubtitle: {
    margin: "8px 0 0",
    fontSize: "15px",
    color: "#cbd5e1",
  },
  main: {
    flex: 1,
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    padding: "28px 20px",
    boxSizing: "border-box",
  },
  footer: {
    textAlign: "center",
    padding: "16px",
    backgroundColor: "#1f2937",
    color: "#9ca3af",
    fontSize: "14px",
  },
}

export default App
