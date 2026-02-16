import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🔥 DevOps Dashboard Demo 🔥</h1>
        <p>CI/CD Pipeline is up and running with Jenkins!</p>

        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h2>Key DevOps Concepts:</h2>
          <ul style={{ textAlign: 'left' }}>
            <li>Version Control: Git & GitHub</li>
            <li>Continuous Integration: Jenkins</li>
            <li>Continuous Delivery / Deployment</li>
            <li>Containerization: Docker</li>
            <li>Infrastructure as Code: Terraform / Ansible</li>
            <li>Monitoring & Alerts: Prometheus / Grafana</li>
          </ul>
        </div>

        <a
          className="App-link"
          href="https://www.jenkins.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '20px', display: 'inline-block' }}
        >
          Learn Jenkins
        </a>
      </header>
    </div>
  );
}

export default App;