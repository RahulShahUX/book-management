import Header from "./Components/Header/Header";
import BookList from "./Components/BookList/BookList";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isLoggedinPage = location.pathname;
  // console.log("isLoggedinPage", isLoggedinPage, isLoggedinPage == "/");
  return (
    <main>
      {isLoggedinPage != "/login" && isLoggedinPage != "/" ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/book" element={<BookList />}></Route>
      </Routes>
    </main>
  )
}

export default App;
