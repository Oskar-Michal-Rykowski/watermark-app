import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
class Card extends React.Component {
    static propTypes = {
      text: PropTypes.string,
    }
    render() {
      const {title} = this.props;
      return (
        <div className={styles.component}>
          <h3>{title}</h3>
        </div>
      );
    }
}
Card.propTypes = {
  title: PropTypes.string,
};
export default Card;
