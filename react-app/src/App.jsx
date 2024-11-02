import './App.css';
import Campo from './components/Campo'

function App() {

  return (
    <>
    <form className="container border border-dark rounded shadow-sm mt-4 d-flex flex-column gap- p-4">
      <h1 className="text-center">Formulário</h1>

      <Campo id="nome"  label="Nome" />
    </form>
  
    </>
  )
}

export default App
