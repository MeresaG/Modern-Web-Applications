const posts = [
    {
        title : "Post One", 
        body : "This is post one",

    },
    {
        title : "Post Two", 
        body : "This is post two",
        
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        } )
        console.log(output);
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}


getPosts();

createPost({title: "Post three", body: "this is post three"}, getPosts);