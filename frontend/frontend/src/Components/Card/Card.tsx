import React, { JSX } from 'react'
import './Card.css'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
    // companyName?: string;
    // ticker?: string;
    // price?: number;
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: React.SyntheticEvent) => void;
}

// function Card({companyName, ticker, price}: Props) {
//   return (
//     <div className='card'>
//         <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='card' />
//         <div className='details'>
//             <h2>{companyName}</h2>
//             <p>{ticker}</p>
//         </div>
//         <p className='info'>${price}</p>
//     </div>
//   )
// }

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}) : JSX.Element => {
  return (
    <div className='card'>
        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='card' />
        <div className='details'>
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
        </div>
        <p className='info'>${searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
    </div>
  )
}

export default Card