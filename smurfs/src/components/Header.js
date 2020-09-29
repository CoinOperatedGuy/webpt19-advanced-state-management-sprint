import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  background-color: steelgrey;
  color: #444;
  text-shadow: 1px 1px 2px steelblue, 2px 2px 2px steelblue, 4px 4px 8px steelblue;
  margin-top: 0;
  padding: 1%;
`

const Header = () => {
  return (
    <Wrapper>
      <h1>Welcome to the React Smurf Village!</h1>
    </Wrapper>
  );
}

export default Header;   