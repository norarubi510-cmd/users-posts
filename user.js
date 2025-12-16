const postListEl = document.querySelector{'.post-list'};

async function onSearchChange(Event) {
    const id = Event.target.value;
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    postListEl.innerHTML = posts.Data.map(post =>`
       <div class= "post">
          <div class= "post_title">
             ${post.title}
              </div>
              <p class = "post_body">
             ${post.body}
              </p>
          </div>
      `).join("");
}

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    console.log(postsData)


postListEl.innerHTML = posts.Data.map(post =>`
    <div class= "post">
    <div class= "post_title">
        ${post.title}
        </div>
        <p class = "post_body">
        ${post.body}
        </p>
    </div>
    `).join("");

}

main();

