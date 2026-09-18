import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EventsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
