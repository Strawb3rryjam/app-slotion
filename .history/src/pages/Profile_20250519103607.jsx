import React from "react";

function Profile() {
  return (
    <div className="w-full">
      <ProfileHeader username="User" />
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

function PostsGrid() {
  // Left column posts
  const leftColumnPosts = [
    { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/294f99533755d365f07f376237364aa1360daa66?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8917e47cd905e1b67bcae4e44a74dccba8c99661?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73c90c7bc17e79dee082cbc37357f9cd6dd5b39e?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab55b3e7a6c626e895e7f565e9f364f71d205f5a?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" }
  ];

  // Right column posts
  const rightColumnPosts = [
    { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b1368c8e0b11307d664071169187747eb6633c3?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 6, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5d06fd9f85a8a33f5544ef320dd0e43086a9b75?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 7, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4640d3189f2644f83bed38a44f82739f3bc61bd?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 8, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5581528379845613be231ad46501f12218b0fa2c?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" }
  ];

  return (
    <section className="flex gap-4 mt-3.5 w-full max-w-[360px]">
      <div className="flex-1">
        {leftColumnPosts.map((post, index) => (
          <article
            key={post.id}
            className={index > 0 ? "mt-3.5 w-full" : "w-full"}
          >
            <img
              src={post.src}
              alt={`Post ${post.id}`}
              className="object-contain aspect-square w-[172px]"
            />
          </article>
        ))}
      </div>
      <div className="flex-1">
        {rightColumnPosts.map((post, index) => (
          <article
            key={post.id}
            className={index > 0 ? "mt-3.5 w-full" : "w-full"}
          >
            <img
              src={post.src}
              alt={`Post ${post.id}`}
              className="object-contain aspect-square w-[172px]"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Profile; 