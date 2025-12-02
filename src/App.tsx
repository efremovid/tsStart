import { useEffect, useState } from "react";
import { getApi } from "./config";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { useSelector } from "react-redux";
import { useAppDispatch } from "./store";
import { getUser } from "./store/user/user-actions";
import { selectUser } from "./store/user/user-selectors";
import { extractAppUser } from "./utils/extractAppUser";
import { ApiUser } from "./types/user";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApi("egor-anders").then((data: ApiUser) =>
      dispatch(getUser(extractAppUser(data)))
    );
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
