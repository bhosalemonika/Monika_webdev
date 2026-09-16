import { useState } from "react";
import "../css/Dashboard.css";

import TopBar from "../components/dashboard/TopBar";
import Sidebar from "../components/dashboard/Sidebar";
import WelcomeSection from "../components/dashboard/WelcomeSection";
import FocusSection from "../components/dashboard/FocusSection";
import UpNext from "../components/dashboard/UpNext";
import QuoteCard from "../components/dashboard/QuoteCard";
import CalendarPage from "../components/dashboard/CalendarPage";
import AchievementsPage from "../components/dashboard/AchievementsPage";
import ProfilePage from "../components/dashboard/ProfilePage";

import AddHabit from "./AddHabit";
import MyHabits from "./MyHabits";
import {
  loadHabits,
  saveHabits,
  toggleHabit,
  upsertHabit
} from "../data/habits";

function readUser() {
  try {
    return JSON.parse(localStorage.getItem("auraUser")) || {};
  } catch {
    return {};
  }
}

function Dashboard() {
  const [activePage, setActivePage] = useState("home");
  const [editHabit, setEditHabit] = useState(null);
  const [habits, setHabits] = useState(loadHabits);
  const completedCount = habits.filter((habit) => habit.completed).length;
  const longestStreak = habits.reduce(
    (best, habit) => Math.max(best, habit.streak || 0),
    0
  );

  const openPage = (page) => {
    setEditHabit(null);
    setActivePage(page);
  };

  const openAddHabit = () => {
    setEditHabit(null);
    setActivePage("add-habit");
  };

  const openEditHabit = (habit) => {
    setEditHabit(habit);
    setActivePage("add-habit");
  };

  const completeHabit = (id) => {
    setHabits((currentHabits) =>
      saveHabits(toggleHabit(currentHabits, id))
    );
  };

  const saveHabit = (habit) => {
    setHabits((currentHabits) =>
      saveHabits(upsertHabit(currentHabits, habit))
    );
    openPage("my-habits");
  };

  return (
    <div className="dashboard">

      <TopBar
        streak={longestStreak}
        openHome={() => openPage("home")}
        openCalendar={() => openPage("calendar")}
        openProfile={() => openPage("profile")}
        openAchievements={() => openPage("achievements")}
      />

      <div className="dashboard-body">
        <Sidebar
          activePage={activePage}
          openAddHabit={openAddHabit}
          openPage={openPage}
        />
        <main className="dashboard-main">
          {activePage === "home" && (
            <>
              <WelcomeSection habits={habits} />
              <div className="dashboard-grid">
                <FocusSection
                  habits={habits}
                  completeHabit={completeHabit}
                  openAddHabit={openAddHabit}
                  openMyHabits={() => openPage("my-habits")}
                />
                <section className="right-section">
                  <UpNext
                    habits={habits}
                    openCalendar={() => openPage("calendar")}
                  />
                  <QuoteCard />
                </section>

              </div>
            </>
          )}

          {activePage === "add-habit" && (
            <AddHabit
              key={editHabit?.id || "new"}
              editHabit={editHabit}
              goToMyHabits={() => openPage("my-habits")}
              onSaveHabit={saveHabit}
            />
          )}

          {activePage === "my-habits" && (
            <MyHabits
              habits={habits}
              completeHabit={completeHabit}
              openAddHabit={openAddHabit}
              openEditHabit={openEditHabit}
            />
          )}

          {activePage === "calendar" && (
            <CalendarPage habits={habits} />
          )}

          {activePage === "achievements" && (
            <AchievementsPage
              completedCount={completedCount}
              longestStreak={longestStreak}
              totalCount={habits.length}
            />
          )}

          {activePage === "profile" && (
            <ProfilePage
              user={readUser()}
              completedCount={completedCount}
              longestStreak={longestStreak}
              totalCount={habits.length}
            />
          )}

        </main>

      </div>

    </div>
  );
}

export default Dashboard;
