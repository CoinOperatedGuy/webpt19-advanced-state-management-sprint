import React, { useEffect } from 'react';
import Smurf from './Smurf';
import Form from './Form';
import { connect } from 'react-redux';
import { getSmurfs } from './../Actions/actions.js';
import styled from 'styled-components';

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const SmurfVillage = (props) => {
  useEffect(() => {
    props.getSmurfs();
  }, [])

  return (
    <>
      <Cards>
        {
          props.smurfs.map((smurf, idx) =>
            <Smurf data={smurf} key={idx} />
          )
        }
      <Form />
      </Cards>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}
export default connect(mapStateToProps, { getSmurfs })(SmurfVillage);