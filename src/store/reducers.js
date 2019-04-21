import usersReducer from "./users/reducers";
import userReducer from "./user/reducers";

const reducers = {
	users: usersReducer,
	user: userReducer
};

export default reducers;