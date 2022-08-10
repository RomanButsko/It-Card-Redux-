import { useDispatch, useSelector } from "react-redux";
import { DeleteFilter, EmptyFilter, FilterSelector } from "./filter-slice";
import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(FilterSelector);

  if (currentFilters.length === 0) return null;

  const deleteFilter = (i) => {
    dispatch(DeleteFilter(i));
  };
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((item) => (
            <Badge
              key={item}
              onClear={() => deleteFilter(item)}
              variant="clearable"
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(EmptyFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
