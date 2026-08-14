import { useState } from "react";

function CircleCalculator() {
  const [g, setG] = useState("");
  const [f, setF] = useState("");
  const [c, setC] = useState("");
  const [radius, setRadius] = useState<number | null>(null);
  const [error, setError] = useState("");

  // Backend API හරහා Calculation එක කිරීම
  const handleCalculate = async () => {
    setError("");
    setRadius(null);

    const gNum = parseFloat(g);
    const fNum = parseFloat(f);
    const cNum = parseFloat(c);

    if (isNaN(gNum) || isNaN(fNum) || isNaN(cNum)) {
      setError("Please enter valid numbers for g, f and c.");
      return;
    }

    try {
      // Spring Boot API එකට POST Request එකක් යැවීම
      const response = await fetch("http://localhost:8080/api/circle/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          g: gNum,
          f: fNum,
          c: cNum,
        }),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setRadius(data.radius);
      }
    } catch (err) {
      setError("Failed to connect to backend server. Make sure Spring Boot is running on port 8080.");
    }
  };

  const handleReset = () => {
    setG("");
    setF("");
    setC("");
    setRadius(null);
    setError("");
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Question 01 - Radius Calculator of Any Given Circle</h2>

      <p style={styles.formula}>
        x² + y² + 2gx + 2fy + c = 0 &nbsp;&nbsp;|&nbsp;&nbsp; Radius = √(g² + f² - c)
      </p>

      <div style={styles.formRow}>
        <label style={styles.label}>g:</label>
        <input
          type="number"
          value={g}
          onChange={(e) => setG(e.target.value)}
          style={styles.input}
          placeholder="Enter g"
        />
      </div>

      <div style={styles.formRow}>
        <label style={styles.label}>f:</label>
        <input
          type="number"
          value={f}
          onChange={(e) => setF(e.target.value)}
          style={styles.input}
          placeholder="Enter f"
        />
      </div>

      <div style={styles.formRow}>
        <label style={styles.label}>c:</label>
        <input
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          style={styles.input}
          placeholder="Enter c"
        />
      </div>

      <div style={styles.buttonRow}>
        <button style={styles.primaryButton} onClick={handleCalculate}>
          Calculate
        </button>
        <button style={styles.secondaryButton} onClick={handleReset}>
          Reset
        </button>
      </div>

      {error && <p style={styles.errorText}>{error}</p>}

      {radius !== null && (
        <p style={styles.resultText}>Radius = {radius.toFixed(4)}</p>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: "1px solid #d0d0d0",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
  },
  title: {
    marginTop: 0,
    fontSize: "20px",
    color: "#1f2937",
    borderBottom: "2px solid #2563eb",
    paddingBottom: "8px",
  },
  formula: {
    fontStyle: "italic",
    color: "#4b5563",
    marginBottom: "16px",
  },
  formRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  label: {
    width: "30px",
    fontWeight: "bold",
  },
  input: {
    padding: "6px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "200px",
  },
  buttonRow: {
    marginTop: "12px",
    display: "flex",
    gap: "10px",
  },
  primaryButton: {
    padding: "8px 16px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "8px 16px",
    backgroundColor: "#e5e7eb",
    color: "#111827",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  errorText: {
    color: "#dc2626",
    marginTop: "12px",
    fontWeight: 500,
  },
  resultText: {
    color: "#15803d",
    marginTop: "12px",
    fontWeight: "bold",
    fontSize: "18px",
  },
};

export default CircleCalculator;