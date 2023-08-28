import * as PropTypes from 'prop-types';

const TextView = ({ isButtonPressed }) => {
  return (
    <div className={`orange-container ${isButtonPressed ? 'active' : ''}`}>
      <div className="orange-text">
        <h2 className="orange-heading">My world today</h2>
        <p className="orange-paragraph">
          Pellentesque habitant morbi tristique senectus et nets et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.{' '}
          <b>
            <u>View all days</u>
          </b>{' '}
          eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
          Maris placerat eleifend leo. Quisque sit amet est et sapien
          ullamcorper pharetra. Vestibulum erat wisi. condimentum sea. commodo
          vitae. ornare sit amet. WIsI Aenean fermentum, elit get tincidunt
          condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
          dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Present
          dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
          vulptate magna eros eu erat. Aliquam erat
        </p>
      </div>
    </div>
  );
};

TextView.defaultProps = {
  isButtonPressed: false,
};

TextView.propTypes = {
  title: PropTypes.bool.isRequired,
};

export default TextView;
