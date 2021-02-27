import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const alert = (props) => {
  return <div></div>;
};

alert.propTypes = {};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect()(Alert);
