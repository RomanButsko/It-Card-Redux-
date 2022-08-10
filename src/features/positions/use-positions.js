import { useSelector } from 'react-redux';
import { selectVisiblePositions } from './positions-slice';

import { FilterSelector } from 'features/filters/filter-slice';

export const usePositions = () => {
  const dataSelector = useSelector(FilterSelector);

  const positions = useSelector((state) =>
    selectVisiblePositions(state, dataSelector)
  );

  return positions
}