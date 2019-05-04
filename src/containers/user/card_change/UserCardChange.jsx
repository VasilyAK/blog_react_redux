import "./UserCardChange.css";
import React from "react";

import UserCardInfo from "./userCardInfo/UserCardInfo";

import Card from "react-bootstrap/Card";

const UserCardChange = (props) => {
	return (
		<Card className="mb-4">
			<Card.Header>
				<h2>{props.name}</h2>
			</Card.Header>
			<Card.Body>
				<div className="mb-5">
					<h3>Address:</h3>
					<UserCardInfo id={props.id}
						source={props.address.city}
						name={'city'}
						path={['address', 'city']}
						dispatch={props.dispatch}
					/>
					<UserCardInfo id={props.id}
						source={props.address.street}
						name={'street'}
						path={['address', 'street']}
						dispatch={props.dispatch}
					/>
					<UserCardInfo id={props.id}
						source={props.address.suite}
						name={'suite'}
						path={['address', 'suite']}
						dispatch={props.dispatch}
					/>
					<UserCardInfo id={props.id}
						source={props.address.zipcode}
						name={'zipcode'}
						path={['address', 'zipcode']}
						dispatch={props.dispatch}
					/>
				</div>

				<div className="mb-5">
					<h3>Company:</h3>
					<UserCardInfo id={props.id}
						source={props.company.bs}
						name={'bs'}
						path={['company', 'bs']}
						dispatch={props.dispatch}
					/>
					<UserCardInfo id={props.id}
						source={props.company.catchPhrase}
						name={'catch phrase'}
						path={['company', 'catchPhrase']}
						dispatch={props.dispatch}
					/>
					<UserCardInfo id={props.id}
						source={props.company.name}
						name={'name'}
						path={['company', 'name']}
						dispatch={props.dispatch}
					/>
				</div>

				<div className="mb-5">
					<h3>User:</h3>
					<UserCardInfo id={props.id}
						source={props.username}
						name={'username'}
						path={['username']}
						dispatch={props.dispatch}
					/>
					<UserCardInfo id={props.id}
						source={props.phone}
						name={'phone'}
						path={['phone']}
						dispatch={props.dispatch}
					/>
					<UserCardInfo id={props.id}
						source={props.website}
						name={'website'}
						path={['website']}
						dispatch={props.dispatch}
					/>
					<UserCardInfo id={props.id}
						source={props.email}
						name={'email'}
						path={['email']}
						dispatch={props.dispatch}
					/>
				</div>
			</Card.Body>
		</Card>
	)
};

export default UserCardChange;