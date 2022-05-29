const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    posts.push(post);
    const error = false;
    if (!error) {
      resolve();
    } else {
      reject("Error: Something went wrong");
    }
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    posts.pop();
    const error = false;
    if (!error) {
      resolve();
    } else {
      reject("Post is empty now");
    }
  });
}
createPost({ title: "Post three", body: "this is post three" })
  .then(() => {
    getPost();
    deletePost().then(() => {
      getPost();
    });
  })
  .catch((err) => console.log(err));
