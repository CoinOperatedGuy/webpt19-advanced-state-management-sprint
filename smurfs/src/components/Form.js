import React, { useState } from 'react';
import { connect } from "react-redux";
import { addSmurf } from './../Actions/actions';
import styled from 'styled-components';

const Card = styled.form`
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #88CCFF;
  color: white;
  text-shadow: 2px 2px 4px gray;
  width: 20%;
  height: auto;
  margin: 2%;
  padding: 2%;
  overflow: hidden;
  transition: all 0.2s ease;
  &:hover {
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px steelblue;
  }
`;

const Form = ({ addSmurf }) => {
    const initialInputState = { name: "", age: "", height: "" };
    const [input, setInput] = useState(initialInputState);

    const handleChange = event => {
      event.preventDefault();
      setInput({ ...input, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
      event.preventDefault();
      addSmurf(input); 
      setInput(initialInputState); 
      event.target.reset(); 
    };

    return (
      <Card onSubmit={handleSubmit}>
        <h1>Name</h1>
        <input
          name="name"
          value={input.name}
          placeholder='Name'
          onChange={handleChange}
        />
        <h2>Age</h2>
        <input
          name="age"
          value={input.age}
          placeholder='Age'
          onChange={handleChange}
        />
        <h2>Height</h2>
        <input
          name="height"
          value={input.height}
          placeholder='Height'
          onChange={handleChange}
        />
        <input type="submit" value="Submit"></input>
      </Card>
    );
  }

  const mapPropstoState = (state) => {
    return {
      smurfs: state.smurfs
    }
  }

  export default connect(mapPropstoState, { addSmurf })(Form);   