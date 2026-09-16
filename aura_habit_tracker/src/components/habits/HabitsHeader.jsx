import { categoryOptions } from "./habitOptions";
function HabitsHeader({
  category,
  onCategoryChange
}) {
  return (
    <div className="my-habits-header">
      <div>
        <h1>
          My Habits
        </h1>
        <p>
          Manage your daily rituals and track your journey
          towards consistent mastery.
        </p>
      </div>

      <select
        className="category-filter"
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option value="All">All Categories</option>
        {categoryOptions.map((categoryName) => (
          <option value={categoryName} key={categoryName}>
            {categoryName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default HabitsHeader;
