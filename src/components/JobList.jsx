import { useDispatch, useSelector } from "react-redux";
import { JobPosition } from "./JobPosition";
import { selectAllPositions } from "store/positions/position-selectors";
import { addFilter } from "store/filters/filter-actions";

const JobList = () => {
  const dispatch = useDispatch();
  const dataSelector = useSelector(selectAllPositions);

  const handleAddFilter = (i) => {
    dispatch(addFilter(i));
  };

  return (
    <div className="job-list">
      {dataSelector.map((item) => (
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
