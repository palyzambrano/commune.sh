/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const posts = [
    {
      title: "Post 1",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui exercitationem, sint recusandae repudiandae debitis ad repellendus similique saepe facilis mollitia perferendis nulla. Vero dignissimos doloremque rerum quibusdam eveniet maiores consectetur.",
      slug: "post-1",
    },
    {
      title: "Post 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui exercitationem, sint recusandae repudiandae debitis ad repellendus similique saepe facilis mollitia perferendis nulla. Vero dignissimos doloremque rerum quibusdam eveniet maiores consectetur.",
      slug: "post-2",
    },
  ];

  return {
    posts,
  };
}
