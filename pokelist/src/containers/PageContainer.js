import React from 'react';
import { connect } from 'react-redux';
import { setPokemon } from '../actions';
import Page from '../components/Page';

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
  };
};

const PageContainer = connect(mapStateToProps, { setPokemon })(Page);

export default PageContainer;
