import {
  categoryOptions,
  frequencyOptions,
  habitIcons
} from "./habitOptions";

function Field({
  label,
  children,
  fullWidth = false
}) {
  return (
    <div className={`form-group ${fullWidth ? "full-width" : ""}`}>
      <label>{label}</label>
      {children}
    </div>
  );
}
function HabitForm({
  form,
  isEditing,
  onChange,
  onSubmit,
  onCancel
}) {
  const setValue = (field) => (event) => {
    onChange(field, event.target.value);
  };

  return (
    <form
      className="habit-form"
      onSubmit={onSubmit}
    >
      <Field label="HABIT NAME" fullWidth>
        <input
          type="text"
          placeholder="e.g., Deep Work Session"
          value={form.name}
          onChange={setValue("name")}
        />
      </Field>

      <Field label="DESCRIPTION" fullWidth>
        <textarea
          placeholder="Define the core objective of this habit..."
          value={form.description}
          onChange={setValue("description")}
        />
      </Field>

      <div className="form-row">
        <Field label="CATEGORY">
          <select
            value={form.category}
            onChange={setValue("category")}
          >
            {categoryOptions.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </Field>

        <Field label="FREQUENCY">
          <div className="frequency-buttons">
            {frequencyOptions.map((frequency) => (
              <button
                key={frequency}
                type="button"
                className={
                  form.frequency === frequency
                    ? "frequency active-frequency"
                    : "frequency"
                }
                onClick={() => onChange("frequency", frequency)}
              >
                {frequency}
              </button>
            ))}
          </div>
        </Field>
      </div>

      <div className="form-row">
        <Field label="REMINDER TIME">
          <input
            type="time"
            value={form.reminderTime}
            onChange={setValue("reminderTime")}
          />
        </Field>

        <Field label="START DATE">
          <input
            type="date"
            value={form.startDate}
            onChange={setValue("startDate")}
          />
        </Field>
      </div>

      <Field label="VISUAL ANCHOR (ICON)" fullWidth>
        <div className="icon-selection">
          {habitIcons.map((icon) => (
            <button
              key={icon.id}
              type="button"
              className={
                form.icon === icon.id
                  ? "anchor-icon selected"
                  : "anchor-icon"
              }
              aria-label={icon.label}
              aria-pressed={form.icon === icon.id}
              onClick={() => onChange("icon", icon.id)}
            >
              <img
                src={icon.src}
                alt=""
              />
            </button>
          ))}
        </div>
      </Field>

      <div className="form-actions">
        <button
          type="button"
          className="cancel-button"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="save-button"
        >
          {isEditing ? "Update Habit" : "Save Habit"}
        </button>
      </div>
    </form>
  );
}

export default HabitForm;
