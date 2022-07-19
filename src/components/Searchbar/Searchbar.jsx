import React, {useState} from "react";
import { Header, Form, Button, Span, Input } from "./Searchbar.styled";
import PropTypes from "prop-types";

export const Searchbar = ({ onSubmit, isLoading}) => {
    const [inputValue, setInputValue] = useState('');
        
        return (
            <Header>
                <Form onSubmit={(e) => {e.preventDefault();
                    onSubmit(inputValue);
                    setInputValue('');}}>
                    <Button type="submit" disabled={isLoading}>
                        <Span>Search</Span>
                    </Button>
                    <Input type="text" 
                    autoComplete="off" 
                    autoFocus 
                    placeholder="Search images and photos"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>
                </Form>
            </Header>
        )
    };

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}