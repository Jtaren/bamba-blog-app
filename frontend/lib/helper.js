const baseURL = "http://localhost:3000/api/posts";

export default async function getPost(id){
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");

    const res = await fetch(`${baseURL}`, { headers });
    const posts = await res.json()

    if(id){
        return posts.find(value => value.id == id)
    }

    return posts;
}
