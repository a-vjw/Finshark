import React from 'react'

interface Props {
  portfolioValue: string;
}

const CardPortfolio = ({portfolioValue}: Props) => {
  return (
  <>
    <div>{portfolioValue}</div>
    <button>Delete</button>
  </>
  )
}

export default CardPortfolio;