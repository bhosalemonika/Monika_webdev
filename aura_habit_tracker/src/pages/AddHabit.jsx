import { useState } from "react";
import "../css/AddHabit.css";
import HabitForm from "../components/habits/HabitForm";
import {
  buildHabit,
  loadHabits,
  saveHabits,
  upsertHabit
} from "../data/habits";

function getForm(editHabit) {
  return {
    name: editHabit?.name || "",
    description: editHabit?.description || "",
    category: editHabit?.category || "Health",
    frequency: editHabit?.frequency || "Daily",
    reminderTime: editHabit?.reminderTime || "08:00",
    startDate: editHabit?.startDate || "",
    icon: editHabit?.icon || "meditation"
  };
}

function AddHabit({
  editHabit,
  goToMyHabits,
  onSaveHabit
}) {
  const [form, setForm] = useState(() => getForm(editHabit));
  const updateForm = (field, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) {
      alert("Please enter habit name");
      return;
    }

    const habit = buildHabit(form, editHabit);

    if (onSaveHabit) {
      onSaveHabit(habit);
      return;
    }

    saveHabits(upsertHabit(loadHabits(), habit));
    goToMyHabits?.();
  };

  return (
    <div className="add-habit-page">
      <div className="add-habit-title">
        <h1>{editHabit ? "Edit Habit" : "Add New Habit"}</h1>
        <p>
          Define the parameters of your next evolution.
          Clarity is the first step toward mastery.
        </p>

      </div>
      <HabitForm
        form={form}
        isEditing={Boolean(editHabit)}
        onChange={updateForm}
        onSubmit={handleSubmit}
        onCancel={goToMyHabits}
      />
    </div>
  );
}

export default AddHabit;
