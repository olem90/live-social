import SocialAPI from "./api/index.js";

const api = new SocialAPI();
console.log(api);

async function testRoutine() {
    let post = await api.post.create({title: "test"})
    console.log(post);
    post = await api.post.update(post.id, {
        title: "updated"
    });

    console.log(post.title);
}

