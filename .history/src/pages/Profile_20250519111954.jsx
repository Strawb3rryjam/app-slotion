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

function ProfileHeader({ username }) {
  return (
    <section
      className="flex flex-wrap gap-36 gap-y-36 justify-between content-end items-end self-stretch px-4 pt-14 pb-3.5 mt-0 text-base leading-none text-center text-black bg-stone-100 min-h-[99px]"
    >
      <button
        className="flex shrink-0 h-6 rounded-sm w-[15px]"
        aria-label="Go back"
      />
      <p className="text-black">
        Hello, <strong>{'Amanda Wu'}</strong>
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
  

function PostsGrid() {
  const posts = [
    { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/294f99533755d365f07f376237364aa1360daa66?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8917e47cd905e1b67bcae4e44a74dccba8c99661?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73c90c7bc17e79dee082cbc37357f9cd6dd5b39e?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab55b3e7a6c626e895e7f565e9f364f71d205f5a?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b1368c8e0b11307d664071169187747eb6633c3?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 6, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5d06fd9f85a8a33f5544ef320dd0e43086a9b75?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 7, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4640d3189f2644f83bed38a44f82739f3bc61bd?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 8, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5581528379845613be231ad46501f12218b0fa2c?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" }
  ];

  const handlePostClick = (postId) => {
    console.log(`Post ${postId} clicked`);
    // Add your click handler logic here
  };

  return (
    <div className="px-4 mt-4">
      <div className="grid grid-cols-2 gap-4 w-full max-w-[360px] mx-auto">
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => handlePostClick(post.id)}
            className="relative w-[172px] h-[172px] overflow-hidden rounded-lg"
            style={{ padding: 0, border: 'none', background: 'transparent' }}
          >
            <img
              src={post.src}
              alt={`Post ${post.id}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Profile; 