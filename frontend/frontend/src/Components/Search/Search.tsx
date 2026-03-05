import React, { ChangeEvent, JSX, useState, MouseEvent, SyntheticEvent } from 'react'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search : React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {
    // const [search, setSearch] = useState<string>('')
    // const handleChange = (e:  ChangeEvent<HTMLInputElement>) => {
    //     setSearch(e.target.value)
    //     console.log(e)
    // }
    
    // const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    //     console.log(e)
    // }
    return (
        <div>
            <form onSubmit={onSearchSubmit}>
                <input type='text' value={search} onChange={handleSearchChange} placeholder='Search for a company...' />
            </form>
        </div>
    )
}

export default Search