import '../styles/App.scss';
import { useEffect, useState } from 'react';

function App() {
  //declaro variables de estado
  const [allData, setAllData] = useState([]);
  const [searchQuote, setSearchQuote] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('all');

  //añadir useEffect
  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  //funciones
  const handleFilterQuote = (ev) => {
    setSearchQuote(ev.target.value);
  };

  const handleFilterCharacter = (ev) => {
    ev.preventDefault();
    setFilterCharacter(ev.target.value);
  };

  const renderList = () => {
    return allData
      .filter((eachQuote) => {
        if (filterCharacter === 'all') {
          return true;
        } else if (eachQuote.character.includes(filterCharacter)) {
          return true;
        }
      })
      .filter((eachQuote) => eachQuote.quote.includes(searchQuote))
      .map((eachQuote, index) => (
        <li key={index} className="li">
          <p>Personaje: {eachQuote.character}</p>
          <p>Frase: {eachQuote.quote}</p>
        </li>
      ));
  };

  return (
    <div className="page">
      <header>
        <h1>Frases de Friends</h1>
      </header>

      <main>
        <form>
          <fieldset>
            <legend>Filtrar por frase</legend>
            <label htmlFor="quote">
              <input
                name="search"
                id="quote"
                placeholder="Filtrar por frase"
                onInput={handleFilterQuote}
                value={searchQuote}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Filtrar por personaje</legend>
            <label htmlFor="character">
              <select
                id="character"
                onChange={handleFilterCharacter}
                value={filterCharacter}
              >
                <option value="all">Todos</option>
                <option value="Joey">Joey</option>
                <option value="Rachel">Rachel</option>
                <option value="Chandler">Chandler</option>
                <option value="Phoebe">Phoebe</option>
                <option value="Ross">Ross</option>
                <option value="Monica">Monica</option>
              </select>
            </label>
          </fieldset>
        </form>

        <section>
          <ul className="ul">{renderList()}</ul>
        </section>
      </main>
    </div>
  );
}

export default App;
