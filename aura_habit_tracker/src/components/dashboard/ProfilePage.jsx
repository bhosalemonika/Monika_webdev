import StatCard from "./StatCard";

function ProfilePage({
  user,
  completedCount,
  longestStreak,
  totalCount
}) {
  const name = user.name || localStorage.getItem("auraName") || "User";
  const email = user.email || "No email added";

  return (
    <section className="simple-page">
      <h1>Profile</h1>
      <p>Quick summary of your Aura account.</p>

      <div className="profile-card">
        <strong>{name}</strong>
        <span>{email}</span>
      </div>

      <div className="simple-grid">
        <StatCard label="Habits" value={totalCount} />
        <StatCard label="Done Today" value={completedCount} />
        <StatCard label="Best Streak" value={`${longestStreak} days`} />
      </div>
    </section>
  );
}

export default ProfilePage;
