import React from "react";

export function ProfileNavigation() {
  return (
    <nav className="w-full">
      <div
        className="flex gap-5 justify-between mt-7 mx-auto max-w-full w-[200px]"
      >
        <div className="flex flex-col">
          <button aria-label="Grid view">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d20c95fa377b74a8c9e90419f571d2b11c30cfd?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
              alt="Grid view icon"
              className="object-contain self-center aspect-square w-[34px]"
            />
          </button>
          <div className="flex shrink-0 h-0.5 rounded-xl bg-neutral-700" />
        </div>
        <button aria-label="List view">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d590067275a993023e821a7977508c86fa5fb0f?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
            alt="List view icon"
            className="object-contain shrink-0 aspect-square w-[34px]"
          />
        </button>
      </div>
      <div className="shrink-0 self-stretch mt-1.5 w-full h-px border border-solid bg-neutral-700 border-neutral-700" />
    </nav>
  );
}
