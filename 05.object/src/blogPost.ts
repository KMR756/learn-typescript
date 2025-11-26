type BlogPost = {
    title:string;
    content:string;
    author:string;
    published:boolean;
    pubslishedDate?:string
}

const myPost:BlogPost= {
    title:"my blog post 1",
    content:"this is my post 1",
    author:"Rahat khan",
    published:true,
    pubslishedDate:"12/12/2025"
}

const myPost2:BlogPost={
    title:"blog post 2",
    content:"this is another post",
    author:"rahat",
    published:true,
    
}

const printPost=(post:BlogPost):BlogPost=>{
    return {title:post.title,content:post.content,author:post.author,published:post.published,pubslishedDate:post.pubslishedDate?post.pubslishedDate:"N/A"}
}

console.log(printPost(myPost));
console.log(printPost(myPost2));
