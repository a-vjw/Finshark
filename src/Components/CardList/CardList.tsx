import React, { JSX } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: React.SyntheticEvent) => void;
}

// const CardList = (props: Props) => {
//   return (
//     <div>
//         <Card companyName='Apple' ticker='APPL' price={100}/>
//         <Card companyName='Google' ticker='GOOGL' price={200}/>
//         <Card companyName='Microsoft' ticker='MSFT' price={300}/>
//     </div>
//   )
// }

const CardList: React.FC<Props> = ({searchResults, onPortfolioCreate}: Props): JSX.Element => {
  return (
    <div>
        {searchResults.length > 0 ? (
            searchResults.map((result) => (
                <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>
            ))
        ) : (
            <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                No results found
            </p>
        )
        }
    </div>
  )
}

export default CardList