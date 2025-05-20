import React from "react";

function Profile() {
  return (
    <div className="w-full">
      <ProfileHeader username="Amanda Wu" />
      <ProfileNavigation />
      <PostsGrid />
    </div>
  );
}