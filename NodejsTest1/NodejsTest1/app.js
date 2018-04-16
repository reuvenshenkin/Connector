
const request = require('superagent')


function getPosts()
{
    request('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.text)
        .then(text => console.log(text))
}

function getPost(postId)
{
    var url = 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments'
    request(url)
        .then(response => response.text)
        .then(text => console.log(text))
}


if (process.argv[2])
    getPost(process.argv[2])

else
    getPosts()