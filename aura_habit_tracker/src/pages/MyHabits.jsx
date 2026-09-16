import { useState } from "react";
import "../css/MyHabits.css";

import {
  loadHabits,
  saveHabits,
  toggleHabit
} from "../data/habits";
import HabitsHeader from "../components/habits/HabitsHeader";
import HabitGrid from "../components/habits/HabitGrid";

function MyHabits({
  habits: providedHabits,
  completeHabit,
  openAddHabit,
  openEditHabit
}) {
  const [localHabits, setLocalHabits] = useState(loadHabits);
  const [category, setCategory] = useState("All");
  const habits = providedHabits ?? localHabits;

  const handleCompleteHabit = (id) => {
    if (completeHabit) {
      completeHabit(id);
      return;
    }
    setLocalHabits((currentHabits) =>
      saveHabits(toggleHabit(currentHabits, id))
    );
  };

  const filteredHabits = category === "All"
    ? habits
    : habits.filter((habit) => habit.category === category);

  return (
    <div className="my-habits-page">
      <HabitsHeader
        category={category}
        onCategoryChange={setCategory}
      />
      <HabitGrid
        habits={filteredHabits}
        onAddHabit={openAddHabit}
        onCompleteHabit={handleCompleteHabit}
        onEditHabit={openEditHabit}
      />
    </div>
  );
}
export default MyHabits;
