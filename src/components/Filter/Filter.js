import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFilter } from '../../redux/contacts/contacts-actions';

const Filter = ({ updateFilter }) => {
  return (
    <div>
      <input
        type="text"
        onChange={updateFilter}
        id="find"
        placeholder="Enter name for Search"
      ></input>
    </div>
  );
};

const mapDispatchProps = dispatch => {
  return {
    updateFilter: event => dispatch(updateFilter(event.target.value)),
  };
};

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchProps)(Filter);
