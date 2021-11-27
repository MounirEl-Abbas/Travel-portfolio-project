import React from "react";
import { BiSearch, RiLayoutGridFill, HiMenuAlt1 } from "../../../assets";
import { useSelector, useDispatch } from "react-redux";
import { countriesActions } from "../../../redux";
import { bindActionCreators } from "redux";

const FilterButtons = () => {
  const { searchTerm } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const { handleSearch, handleSortBy, handleToggleLayout } = bindActionCreators(
    countriesActions,
    dispatch
  );
  return (
    <section className="countries-filters">
      <article className="filter-search">
        <input
          type="text"
          placeholder="Search Country..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </article>
      <article className="filter-btns">
        <div className="filter-btns-sort">
          <label htmlFor="sort-by">Sort By</label>
          <select
            defaultValue="null"
            name="sort-by"
            id="sort-by"
            onChange={(e) => handleSortBy(e.target.value)}
          >
            <option value="null" disabled hidden>
              Choose here
            </option>
            <option value="alpha-ascending">Ascending (a-z)</option>
            <option value="alpha-descending">Descending (z-a)</option>
            <option value="pop-ascending">Ascending (pop.)</option>
            <option value="pop-descending">Descending (pop.)</option>
          </select>
        </div>
        <div className="filter-btns-layout">
          <button onClick={() => handleToggleLayout("default")}>def</button>
          <button onClick={() => handleToggleLayout("alternative")}>alt</button>
        </div>
      </article>
    </section>
  );
};

export default FilterButtons;
