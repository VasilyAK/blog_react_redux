import "./UserCard.css";
import React from "react";

import UserCardInfo from "./userCardInfo/UserCardInfo";

import Card from "react-bootstrap/Card";

const UserCard = (props) => {
	return (
		<Card className="mb-4">
			<Card.Header>
				<h2>{props.name}</h2>
			</Card.Header>
			<Card.Body>
				<div className="mb-5">
					<h3>Address:</h3>
					<UserCardInfo name={'city'} source={props.address.city}/>
					<UserCardInfo name={'street'} source={props.address.street}/>
					<UserCardInfo name={'suite'} source={props.address.suite}/>
					<UserCardInfo name={'zipcode'} source={props.address.zipcode}/>
				</div>

				<div className="mb-5">
					<h3>Company:</h3>
					<UserCardInfo name={'bs'} source={props.company.bs}/>
					<UserCardInfo name={'catch phrase'} source={props.company.catchPhrase}/>
					<UserCardInfo name={'name'} source={props.company.name}/>
				</div>

				<div className="mb-5">
					<h3>User:</h3>
					<UserCardInfo name={'username'} source={props.username}/>
					<UserCardInfo name={'phone'} source={props.phone}/>
					<UserCardInfo name={'website'} source={props.website}/>
					<UserCardInfo name={'email'} source={props.email}/>
				</div>
			</Card.Body>
		</Card>
	)
};

export default UserCard;