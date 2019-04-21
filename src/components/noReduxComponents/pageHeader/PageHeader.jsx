import "./PageHeader.css";
import React from "react";

const PageHeader = (props) => {
	return (
		<h1 className="my-4">{props.children}</h1>
	)
};

export default PageHeader;