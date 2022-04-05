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


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve()
            }
            else {
                reject('Eror: something wrong')
            }
        } , 2000)
    })
    
}


async function init() {
    await createPost({title: "Post three", body: "this is post three"});
    getPosts();
}


init();