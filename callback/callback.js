const posts = [
  {
    title: "post one",
    body: "this is post one",
    createdAt: new Date().getTime(),
  },
  {
    title: "post two",
    body: "this is post two",
    createdAt: new Date().getTime(),
  },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} - last updated at ${
        (new Date().getTime() - post.createdAt) / 1000
      } second ago </li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 2000);
}

createPost(
  {
    title: "post three",
    body: "this is post three",
  },
  getPost
);

createPost(
  {
    title: "post four",
    body: "this is post four",
  },
  getPost
);
