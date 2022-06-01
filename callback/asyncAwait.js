const posts = [
  {
    title: "post one",
    body: "this is post one",
  },
  {
    title: "post two",
    body: "this is post two",
  },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      console.log(post);
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
getPost();
async function printPost() {
  await createPost({ title: "post three ", body: "this is post 3" });
  getPost();
}

printPost();
