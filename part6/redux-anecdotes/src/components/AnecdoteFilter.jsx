import { useSelector, useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const filterList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state = state.filter)

    const handleAnecdoteChange = (e) => {
        dispatch(filterChange(e.target.value))
    }

    return (
        <div>
            filter <input
                onChange={handleAnecdoteChange}
                placeholder="filter anecdotes" />

        </div>
    )
}

export default FilterList