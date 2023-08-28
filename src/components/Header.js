import * as PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'BANANA REPUBLIC',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headingStyle = { color: 'red', backgroundColor: 'black' };

export default Header;
