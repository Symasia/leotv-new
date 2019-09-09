import db from "../services/firebaseInit.js";

const getNewsData = dispatch => {
  (async () => {
    const snapshot = await db.collection("news").get();
    const posts = [];
    snapshot.forEach(doc => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    dispatch({
      type: "setNewsData",
      data: posts
    });
    return;
  })();
};

export default getNewsData;
