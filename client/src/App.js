import './App.css';
import Post from "./Post";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {UserContextProvider} from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="https://blogs-app-ulti.onrender.com/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="https://blogs-app-ulti.onrender.com/login" element={<LoginPage />} />
          <Route path="https://blogs-app-ulti.onrender.com/register" element={<RegisterPage />} />
          <Route path="https://blogs-app-ulti.onrender.com/create" element={<CreatePost />} />
          <Route path="https://blogs-app-ulti.onrender.com/post/:id" element={<PostPage />} />
          <Route path="https://blogs-app-ulti.onrender.com/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
