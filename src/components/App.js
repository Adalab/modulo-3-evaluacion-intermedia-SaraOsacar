import '../styles/App.scss';

function App() {
  return (
    <div className='page'>
      <h1>Frases de friends</h1>
      <form>
        <fieldset>
          <legend>Filtrar por frase</legend>
          <label htmlFor="phrase">
            <input type="text" name="search" id="phrase"/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Filtrar por personaje</legend>
          <label htmlFor="character">
            <select id="character">
              <option value="all">Todos</option>
              <option value="Monica">Monica</option>
              <option value="Rachel">Rachel</option>
              <option value="Phoebe">Phoebe</option>
              <option value="Ross">Ross</option>
              <option value="Chandler">Chandler</option>
              <option value="Joey">Joey</option>
              </select>
          </label>
        </fieldset>
      </form>
      
    </div>
  );
}

export default App;
