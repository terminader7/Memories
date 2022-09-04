export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
    case "UPDATE":
    case "LIKE":
      return posts.map((post) =>
        //return the updated post, otherwise return the post as it was without any updates
        post._id === action.payload._id ? action.payload : post
      );
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload);
  }
};
