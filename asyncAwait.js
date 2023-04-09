const posts =[
    {
        title: 'Post one is the first async await fulfilled',
        body: 'This is post one'
    },
    {
        title: 'Post two is the second async await fulfilled',
        body: 'This is post  two'
    }
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `
                <ul class='ordered--left'>
                    <li>${post.title}</li>
                    <li>${post.body}</li>
                </ul>
            `; // end of template literal
        }); // end of forEach function 
       document.body.innerHTML = output;
    },1000); // end of setTimeout function 
} // end of getPost() function

/*

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);// end of push method
        callback();
    }, 2000); // end of setTimeout function
}// end of createPost function

*/


// setTimeout(()=>{
    //     posts.push(post);// end of push method
    //     callback();
    // }, 2000); // end of setTimeout function

/*    
function createPost(post){
    return new Promise((fullfill, reject)=>{
        setTimeout(()=>{
            posts.push(post);// end of push method
            const error = false;// set this to test our error message
            if(!error){
                fullfill();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);// end of setTimeout
    });// end of return statement
    
    
}// end of createPost function

const promise1 = Promise.resolve('I promise you, this is true!');
const promise2 = 3000;
const promise3 = 'times';
const promise4 = new Promise((resolve,reject)=>
    setTimeout(resolve, 2000, 'Forever! From Spidey!')
    );

Promise.all([promise1,promise2, promise3,promise4]).then((values)=>console.log(values));

/*
getPosts();
// createPost({title: 'Post Three', body:'This is post three'}, getPosts);
createPost({
    title: 'Post Three', 
    body:'This is post three'
}).then(getPosts).catch(error => console.log(err));
*/


/**ASYNC AWAIT */
/*
function createPost(post){
    return new Promise((fullfill, reject)=>{
        setTimeout(()=>{
            posts.push(post);// end of push method
            const error = false;// set this to test our error message
            if(!error){
                fullfill();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);// end of setTimeout
    });// end of return statement
}// end of createPost function

async function init(){
    await createPost({title:'Post three', body:'This is post three'});
    getPosts();
}

init();

*/

async function fetchUserData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const userData = await res.json();
    console.log(userData);
}

fetchUserData();