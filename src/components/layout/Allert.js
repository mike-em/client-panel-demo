import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Allert = props => {
  const { message, messageType } = props;
  return (
    <div
      className={classnames('alert', {
        'alert-success': messageType === 'success',
        'alert-danger': messageType === 'error',
      })}
    >
      {message}
    </div>
  );
};

Allert.propTypes = {
  message: PropTypes.string.isRequired,
  messageTypes: PropTypes.string.isRequired,
};

export default Allert;
