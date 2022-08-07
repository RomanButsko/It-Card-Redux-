import { useDispatch, useSelector } from "react-redux";
import { deleteFilter, emptyFilter } from "store/filters/filter-actions";
import { FilterSelector } from "store/filters/filter-selectors";
import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(FilterSelector);

  if (currentFilters.length === 0) return null;

  const DeleteFilter = (i) => {
    dispatch(deleteFilter(i));
  };
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((item) => (
            <Badge
              key={item}
              onClear={() => DeleteFilter(item)}
              variant="clearable"
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(emptyFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
