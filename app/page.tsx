import Navbar from "@/components/frontend/navbar";
import JoinGame from "@/components/frontend/join-game";
import GameList from "@/components/frontend/game-list";
import ProfileSidebar from "@/components/frontend/profile-sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content - 3/4 width on large screens */}
          <div className="lg:col-span-3 space-y-8">
            {/* Join Game Section */}
            <JoinGame />

            {/* Popular Games Section */}
            <GameList
              title="เกมแนะนำ"
              viewAllText="ดูทั้งหมด"
              viewAllLink="/games"
            />
          </div>

          {/* Profile Sidebar - 1/4 width on large screens */}
          <div className="lg:col-span-1">
            <Link href="/auth/login?returnTo=/profile">
              <Button>Login</Button>
            </Link>
            {/* <ProfileSidebar name="ภานุวัฒน์" coins={1200} /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
