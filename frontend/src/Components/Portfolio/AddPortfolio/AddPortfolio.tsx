import exp from "constants";
import React, { SyntheticEvent } from "react";

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio: React.FC<Props> = ({ onPortfolioCreate, symbol }) => {
    return <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} />
        <button type="submit">Add to Portfolio</button>
    </form>
};

export default AddPortfolio;