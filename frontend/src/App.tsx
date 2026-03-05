import React, { ChangeEvent, MouseEvent, SyntheticEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import AddPortfolio from './Components/Portfolio/AddPortfolio/AddPortfolio';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';
import CardPortfolio from './Components/Portfolio/CardPortfolio/CardPortfolio';

function App() {
  const [search, setSearch] = useState<string>('')
  const [searchResult, setsearchResult] = useState<CompanySearch[]>([])
  const [serveError, setServeError] = useState<string>('')
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])

  const handleSearchChange = (e:  ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      // console.log(e)
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
    console.log(portfolioValues)
  }
  
  const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      if(typeof result === 'string') {
        // console.error('Error fetching companies:', result);
        setServeError(result);
      } else if(Array.isArray(result.data)) {
        setsearchResult(result.data);
      }
      console.log(searchResult)
  }

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      <ListPortfolio portfolioValues={portfolioValues} />
      {serveError && <p className='error'>{serveError}</p>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
