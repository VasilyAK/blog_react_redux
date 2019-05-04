import "./Search.css";
import React from "react";

import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import {useState} from "react";

const Search = () => {
	const [searchText, setSerchText] = useState('');

	const searchTextHandler = (event) => {
		setSerchText(event.target.value)
	};

	let preText = "";
	if (searchText) {
		preText = "You are searching for:"
	}

	return (
		<Card className="my-4">
			<Card.Header>Search</Card.Header>
			<Card.Body>
				<InputGroup>
					<FormControl
						placeholder="Search for ..."
						value={searchText}
						onChange={searchTextHandler}
					/>
					<InputGroup.Prepend>
						<Button variant="outline-secondary">Go!</Button>
					</InputGroup.Prepend>
				</InputGroup>
				<Card.Text className="mt-3">
					{preText} {searchText}
				</Card.Text>
			</Card.Body>
		</Card>
	)
};

export default Search;