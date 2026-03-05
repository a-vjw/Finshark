import React from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';


interface Props {
    portfolioValues: string[];
}

const ListPortfolio = ({portfolioValues}: Props) => {
  return (
    <>
    <div>My Portfolio</div>
    <ul>
        {portfolioValues && portfolioValues.map((portfolioValue) =>  { 
            return <CardPortfolio portfolioValue={portfolioValue} />
        })}
    </ul>
    </>
  )
  
}

export default ListPortfolio