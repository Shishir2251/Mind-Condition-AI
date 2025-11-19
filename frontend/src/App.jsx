import PredictorForm from "./components/PredictorForm";
import RoleChat from "./components/RoleChat";
import "./i18n";

export default function App() {
  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <PredictorForm />
      <hr />
      <RoleChat />
    </div>
  );
}
