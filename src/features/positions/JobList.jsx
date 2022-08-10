import { useDispatch } from "react-redux";
import { JobPosition } from "./JobPosition";
import { AddFilter } from "./../filters/filter-slice";
import { usePositions } from "./use-positions";
import { useFetchPosition } from "./use-fetch-positions";

const JobList = () => {
  useFetchPosition();
  const positions = usePositions();
  const dispatch = useDispatch();

  const handleAddFilter = (i) => {
    dispatch(AddFilter(i));
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
