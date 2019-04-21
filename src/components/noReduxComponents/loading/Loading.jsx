import "./Loading.css";
import React, {useState, useEffect} from "react";

const Loading = () => {
	let [dot, setStep] = useState('.');

	useEffect(() => {
		let timer = setTimeout(() => {
			if (document.querySelector("#VAKloading")){
				setStep(dot === '.' ? '..' : (dot === '..' ? '...' : '.'));
			}
		}, 500);
	}, [dot]);

	return (
		<p id="VAKloading">Loading{dot}</p>
	);
};

export default Loading;