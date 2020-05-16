import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'


const SearchInputBox = props => {
    const {value,onValueChange} = props;
    
    return (
      <StyledInput
        className="form-control"
        type="text"
        placeholder="Search..."
        autoComplete="off"
        value = {value}
        onChange={e=>onValueChange(e.target.value)}
        spellCheck={false}
      />
    );
}

SearchInputBox.propTypes = {
    value:PropTypes.string,
    onValueChange:PropTypes.func.isRequired
}

SearchInputBox.defaultProps = {
    value:''
}

const StyledInput = styled.input`
  max-width: 500px;
  border: 2px solid lightgrey;
`;


export default SearchInputBox;
