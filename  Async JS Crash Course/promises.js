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
            const error = true;
            if(!error) {
                resolve()
            }
            else {
                reject('Eror: something wrong')
            }
        } , 2000)
    })
    
}


createPost({title: "Post three", body: "this is post three"})
                    .then(getPosts)
                    .catch(err => console.log(err));

//promise.all
const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "good bye")
});

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values))