import "./Search.css";
import React from "react";

import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Search = () => {
	return (
		<Card className="my-4">
			<Card.Header>Search</Card.Header>
			<Card.Body>
				<InputGroup>
					<FormControl
						placeholder="Search for ..."
					/>
					<InputGroup.Prepend>
						<Button variant="outline-secondary">Go!</Button>
					</InputGroup.Prepend>
				</InputGroup>
			</Card.Body>
		</Card>
	)
};

export default Search;