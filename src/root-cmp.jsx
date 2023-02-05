import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";

export function RootCmp() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default RootCmp;
