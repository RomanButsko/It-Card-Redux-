import { useDispatch, useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "store/positions/position-selectors";
import { addFilter } from "store/filters/filter-actions";
import { FilterSelector } from "store/filters/filter-selectors";

const JobList = () => {
  const dispatch = useDispatch();
  const dataSelector = useSelector(FilterSelector);

  const positions = useSelector((state) =>
    selectVisiblePositions(state, dataSelector)
  );

  const handleAddFilter = (i) => {
    dispatch(addFilter(i));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
