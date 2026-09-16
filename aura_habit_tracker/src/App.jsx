
import Home from "./pages/Home.jsx";
import Login from "./pages/login.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Dashboard from "./pages/Dashboard.jsx"
import AddHabit from "./pages/AddHabit.jsx";
import MyHabits from "./pages/MyHabits.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";

function StandaloneMyHabits() {
  const navigate = useNavigate();

  return (
    <MyHabits
      openAddHabit={() => navigate("/add-habit")}
      openEditHabit={(habit) =>
        navigate("/add-habit", { state: { habit } })
      }
    />
  );
}

function StandaloneAddHabit() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AddHabit
      key={location.state?.habit?.id || "new"}
      editHabit={location.state?.habit || null}
      goToMyHabits={() => navigate("/habits")}
    />
  );
}

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/habits" element={<StandaloneMyHabits />} />
        <Route path="/add-habit" element={<StandaloneAddHabit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
