import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeHandleFilter = event => {
    const { value } = event.currentTarget;

    dispatch(changeFilter(value));
  };

  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={changeHandleFilter} />
      </Label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
