import React from "react";
"use client";
import * as React from "react";
import { StatusBar } from "./StatusBar";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileInfo } from "./ProfileInfo.jsx";
import { ProfileNavigation } from "./ProfileNavigation";
import { PostsGrid } from "./PostsGrid";

function ProfilePage() {
  return (
    <main className="flex flex-col items-center mx-auto w-full bg-stone-100 max-w-[480px]">
      <StatusBar />
      <ProfileHeader username="Amanda Wu" />
      <ProfileInfo
        profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/b8d6a257261fe32f9cfa4f8eaa00f24d215d0e60?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
        username="amandawuuu"
        styleChips={["Chic", "Minimalistic", "Y2K"]}
        followers={87}
        following={45}
        pronouns="She/Her"
      />
      <ProfileNavigation />
      <PostsGrid />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731323424a5a4744740d4c4f889517a8dc1c0e2?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
        alt="Navigation bar"
        className="object-contain self-stretch w-full aspect-[3.07]"
      />
    </main>
  );
}

export default ProfilePage;
