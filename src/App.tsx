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
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  const [search, setSearch] = useState<string>('')
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  const [searchResult, setsearchResult] = useState<CompanySearch[]>([])
  const [serveError, setServeError] = useState<string | null>(null)
  

  const handleSearchChange = (e:  ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
      // console.log(e)
  }

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if(exists) {
      alert('This stock is already in your portfolio!');
      return;
    }
    console.log("E: " + e.target[0].value)
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
    // console.log(portfolioValues)
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
      // console.log(searchResult)
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const updatedPortfolio = portfolioValues.filter((value) => value !== e.target[0].value);
    setPortfolioValues(updatedPortfolio);
  }

  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
      {serveError && <p className='error'>{serveError}</p>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
