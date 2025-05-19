import React from "react";

interface ProfileInfoProps {
  profileImage: string;
  username: string;
  styleChips: string[];
  followers: number;
  following: number;
  pronouns: string;
}

export function ProfileInfo({
  profileImage,
  username,
  styleChips,
  followers,
  following,
  pronouns
}: ProfileInfoProps) {
  return (
    <section className="flex flex-col items-center">
      <img
        src={profileImage}
        alt="Profile picture"
        className="object-contain mt-1.5 max-w-full rounded-full aspect-[0.99] w-[114px]"
      />
      <p
        className="mt-2.5 text-sm leading-none text-center text-black"
      >
        @{username}
      </p>
      <div
        className="flex gap-2 justify-center items-center mt-2 text-sm leading-none text-orange-50 whitespace-nowrap"
      >
        {styleChips.map((chip, index) => (
          <span
            key={index}
            className="gap-2 self-stretch px-2.5 py-1 my-auto text-orange-50 rounded-xl bg-neutral-700"
          >
            {chip}
          </span>
        ))}
      </div>
      <div
        className="flex gap-1.5 items-center mt-2.5 text-sm leading-none text-center text-black"
      >
        <p
          className="self-stretch my-auto text-black"
        >
          {followers} Followers
        </p>
        <p
          className="self-stretch my-auto text-black"
        >
          {following} Following
        </p>
      </div>
      <p
        className="mt-2 text-sm leading-none text-center text-black"
      >
        {pronouns}
      </p>
    </section>
  );
}
