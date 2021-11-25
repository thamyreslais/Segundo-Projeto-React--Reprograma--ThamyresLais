import './App.css';
import Title from './components/Title'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Title texto = 'Meu Segundo Projeto React do Zero'/>
       <Card/>
      </header>
    </div>
  );
}

export default App;
