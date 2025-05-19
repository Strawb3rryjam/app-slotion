import React from "react";

interface ProfileHeaderProps {
  username: string;
}

export function ProfileHeader({ username }: ProfileHeaderProps) {
  return (
    <section
      className="flex flex-wrap gap-36 gap-y-36 justify-between content-end items-end self-stretch px-4 pt-14 pb-3.5 mt-0 text-base leading-none text-center text-black bg-stone-100 min-h-[99px]"
    >
      <button
        className="flex shrink-0 h-6 rounded-sm w-[15px]"
        aria-label="Go back"
      />
      <p className="text-black">
        Hello, <strong>{ username }</strong>
      </p>
      <button aria-label="Settings">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d94ffadff03bcd5ab6f3372b04d6607026a9dc68?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
          alt="Settings icon"
          className="object-contain shrink-0 aspect-square w-[27px]"
        />
      </button>
    </section>
  );
}
