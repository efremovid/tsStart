import { useEffect, useState } from "react";
import { getApi } from "./config";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "./store";
import { getUser } from "./store/user/user-actions";
import { selectUser } from "./store/user/user-selectors";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApi("egor-anders").then((data) => dispatch(getUser(data)));
  }, []);

  const user = useSelector(selectUser);

  console.log(user);

  return (
    <div className="content">
      <Header />
      <Search />
      <UserCard />
    </div>
  );
}

export default App;
