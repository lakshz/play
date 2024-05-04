import React from 'react';
import PropTypes from 'prop-types';
import BtnStyle from './btn.style';

const Button = ({ className, children, ...props }) => {
  const addClasses = ['appion__btn'];
  if (className) {
    addClasses.push(className);
  }

  const initalButton = (
    <BtnStyle className={addClasses.join(' ')} {...props} onClick={props.onClick}>
      {children}
      {props.icon ? <img src={props.icon} alt={props.title} /> : <> </>}
      {props.title}
    </BtnStyle>
  );

  return (
    <React.Fragment>
      {props.url ? (
        <a href={props.url} target="_blank" rel="noreferrer">
          {initalButton}
        </a>
      ) : (
        initalButton
      )}
    </React.Fragment>
  );
};

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a']), //--
  upperCase: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  external: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
