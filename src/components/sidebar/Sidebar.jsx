import "./Sidebar.css";
import React from "react";

import Search from "./search/Search.jsx";
import Category from "./category/Category.jsx";
import Widget from "./widget/Widget.jsx";

const Sidebar = () => {
	return (
		<>
			<Search />
			<Category />
			<Widget />
		</>
	)
};

export default Sidebar;