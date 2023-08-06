import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Logo from '../images/Friends.png';
import Logosofa from '../images/SofaFriends.jpg';

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
          //me retorna que la condición dada sea verdadera
          return true;
        } else if (
          eachQuote.character
            .toLocaleLowerCase()
            .includes(filterCharacter.toLocaleLowerCase())
        ) {
          return true;
        }
        return false;
      })
      .filter((eachQuote) =>
        eachQuote.quote
          .toLocaleLowerCase()
          .includes(searchQuote.toLocaleLowerCase())
      )
      .map((eachQuote, index) => (
        <li key={index} className="li">
          <p>
            {eachQuote.character} : {eachQuote.quote}{' '}
          </p>
        </li>
      ));
  };

  return (
    <div className="page">
      <header className="header">
        <div className="logo_box">
          <img src={Logo} alt="Logo" className="header_logo" />
        </div>
      </header>

      <main>
        <form className="quote_box">
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
          <ul className="quote_list">{renderList()}</ul>
        </section>
      </main>
      <footer className="footer">
        <img src={Logosofa} alt="Sofa" className="footer_logo" />
        </footer>
    </div>
  );
}

export default App;
