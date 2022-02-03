var i = 0;
var initialNumber = 5;
var postsContainer = document.createElement("div");
postsContainer.id = "posts-container";
document.body.appendChild(postsContainer);

function showBlogs(element) {
    var post = document.createElement("div");
    post.classList.add("post")
    postsContainer.appendChild(post);
    post.style = `position: relative;
    background-color: #4992d3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    padding: 20px;
    margin: 40px 0;
    display: flex;
    width: 80vw;
    max-width: 800px;`;

    var postNumber = document.createElement("span");
    postNumber.classList.add("number");
    postNumber.innerHTML = 1 + i++;
    post.appendChild(postNumber);
    postNumber.style = `position: absolute;
    top: -15px;
    left: -15px;
    font-size: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    color: #296ca8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 10px;`;

    var postInfo = document.createElement("div");
    postInfo.classList.add("post-info");
    post.appendChild(postInfo);
    postInfo.style = `margin-left: 20px;`;

    var postTitle = document.createElement("h2");
    postTitle.classList.add("post-title");
    postTitle.innerHTML = element.title;
    postInfo.appendChild(postTitle);
    postTitle.style.margin = "0";

    var postBody = document.createElement("p");
    postBody.classList.add("post-body");
    postBody.innerHTML = element.content;
    postBody.style = `margin: 15px 0 0;
    line-height: 1.3;`;
    postInfo.appendChild(postBody);
}

blogContent.slice(0, initialNumber).forEach((element) => {
    console.log(initialNumber);
    showBlogs(element);
});

function scrollWindow(event) {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
}

function showLoading() {
    initialNumber = initialNumber + 5;
    loader.classList.add = 'show';
}

function showLoading() {
    initialNumber += 5;
    loading.classList.add = 'show';
    setTimeout(() => {
        loading.classList.remove = 'show'
            // setTimeout(() => {
            //     blogContent.slice(0, initialNumber).forEach((element) => {
            //         console.log(blogContent.title)
            //         showBlogs(element);
            //     });
            // }, 500)
    }, 1000);

    setTimeout(() => {
        blogContent.slice(0, initialNumber).forEach((element) => {
            showBlogs(element);
        });
    }, 500)
}
window.addEventListener('scroll', function(event) {
    scrollWindow(event);
})