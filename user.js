const postListEl = document.querySelector{'.post-list'};
const id = localStorage.getItem("id")

async function onSearchChange(Event) {
    const id = Event.target.value;
    renderPosts(id);
}

async function renderPosts(id) {
    const posts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();
    postListEl.innerHTML = postsData.map(post => postHTML(post) ).join('');
}

function postHTML(post) {
   return `
    <div class= "post">
    <div class= "post_title">
        ${post.title}
        </div>
        <p class = "post_body">
        ${post.body}
        </p>
    </div>
    `

}

renderPosts(id);

