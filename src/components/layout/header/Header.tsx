import Search from "./search/Search";
import Profile from "./profile-menu/Profile";

export default function Header() {
  return (
    <header className="h-[88px] w-full border-b-2 pl-[22px] border-[#DBDBDB] flex items-center justify-between">
      <Search />
      <Profile />
    </header>
  );
}
