import HomeCard from "../components/homeCard";
import OneMoreFriendCard from "../components/OneMoreFriendCard";

export default function Home() {
  return (
    <div className="justify-between mx-auto">
      <HomeCard />
      <div className="relative bg-white">
        <OneMoreFriendCard />
      </div>
    </div>
  );
}
