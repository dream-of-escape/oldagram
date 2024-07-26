let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el")

for (let i = 0; i < posts.length; i++) {
    let post = posts[i]
    mainEl.innerHTML += `
    <section class="post-content">
        <div class="user-info">
            <img src="${post.avatar}" class="avatar" alt="The post author's avatar.">
            <div>
                <p class="bold">${post.name}</p>
                <p class="small">${post.location}</p>
            </div>
        </div>
        <img src="${post.post}" class="post-img" id="post-el-${i}" alt="The image associated with this post.">
        <div class="social-container">
            <div>
                <img src="images/icon-heart.png" class="social-icon" id="heart-icon-el-${i}" tabindex="0" role="button" alt="The share icon">
                <img src="images/icon-comment.png" class="social-icon" tabindex="0" role="button" alt="The comment icon.">
                <img src="images/icon-dm.png" class="social-icon" tabindex="0" role="button" alt="The direct message icon.">
            </div>
            <p id="likes-el-${i}" class="bold">${post.likes} likes</p>
            <p><span class="bold">${post.username}</span> ${post.comment}</p>
        </div>
    </section>`
}

for (let i = 0; i < posts.length; i++) {
    document.getElementById(`post-el-${i}`).addEventListener("dblclick", () => {newLike(i)})
    document.getElementById(`heart-icon-el-${i}`).addEventListener("dblclick", () => {newLike(i)})
}

function newLike(postNum) {
    const likesEl = document.getElementById("likes-el-" + postNum)
    posts[postNum].likes += 1
    likesEl.innerHTML = `${posts[postNum].likes} likes`
}