import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const alert = ({alerts}) => {
  return <div></div>;
};

alert.propTypes = {
    alerts:PropTypes.array.isRequired;
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect()(Alert);
