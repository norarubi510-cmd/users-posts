// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


async function main() {
    const users = await fetch ("https://jsonplaceholder.typicode.com/users");
    const userData = await users.json();
    const userListEl = document.querySelector(".user-list");
    
    userListEl.innerHTML = userData
      .map(
        (user) => `<div  class="user-card">
        <div class= "user-card_container">
         <h3>${user.name}</h3>
            <p><b>Email:</b>${user.email}</p>
            <p><b>Phone:</b>${user.phone}</p>
            <p><b>Website:</b> <a href= "${user.website}"
            target="_blank"> ${user.website}
            </a></p>
        </div>
    </div>`     
    )
    .join("");
}

main();
