import usersReducer from "./reducers/users_reducers";
import userReducer from "./reducers/user_reducers";
import postsReducer from "./reducers/posts_reducers";
import postReducer from "./reducers/post_reducers";
import commentsReducer from "./reducers/comments_reducers";
import commentReducer from "./reducers/comment_reducers";

const reducers = {
	users: usersReducer,
	user: userReducer,
	posts: postsReducer,
	post: postReducer,
	comments: commentsReducer,
	comment: commentReducer
};

export default reducers;