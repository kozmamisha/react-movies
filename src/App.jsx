import React from 'react';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom';

import './index.scss';

import Movies from './components/Movies';
import Skeleton from './components/Skeleton';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [lists, setLists] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios.get('http://localhost:3001/movies')
      .then(({ data }) => {
        setLists(data)
      }).finally(() => setIsLoading(false))
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <Routes>
          <Route exact path='/' element={
            <>
              <div className="header">
                <ul className='header__navigation'>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="header__search-input"
                  placeholder='Search by name'
                />
              </div>
              <div className='movies'>
                {lists
                  .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((obj) => (
                    <Movies
                      key={obj.id}
                      id={obj.id}
                      title={obj.title}
                      year={obj.year}
                      poster={obj.poster}
                      summary={obj.summary}
                      genres={obj.genres}
                    />
                  ))}
              </div>
            </>
          }></Route>

          <Route exact path='/about' element={
            <>
              <div className="header">
                <ul className='header__navigation'>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
              <div className='about'>
                <p>
                  The "react movies" project was created by Kozma Misha in the JavaScript programming language and with the React framework.
                </p>
              </div>
            </>
          }></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
