import './App.css';
import ComponenteFormulario from './components/ComponenteFormulario';

function App() {
  let enviar = "";

  return (
    <div className="App">
      <header className="App-header">
        <ComponenteFormulario
          for

          enviar={enviar}
        />
      </header>
    </div>
  );
}

export default App;
