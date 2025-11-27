import { useEffect, useState } from "react";
import { getApi } from "./config";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";

function App() {
  return (
    <div className="content">
      <Header />
      <Search />
      <UserCard />
    </div>
  );
}

export default App;
