import { Component } from "react";
import { ChangeEvent } from "react";
import React from "react";
import { SearchBoxStyle } from "./searchbar.style";

type SearchBarProps = {
    className?: string,
    placeholder?: string,
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
};


const SearchBar = ({className, 
    placeholder, 
    onChangeHandler}: SearchBarProps
    ) => (
        <SearchBoxStyle
        placeholder={placeholder}
        onChange={onChangeHandler}/>
    )
export default SearchBar;