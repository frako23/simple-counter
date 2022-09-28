import React, { useEffect, useState } from "react";
import SecondsCounter from "./secondsCounter.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	const [contador, setContador] = useState(0);
	const [intervalid, setIntervalid] = useState()
	useEffect(() => {
			const _intervalid = setInterval(() => {
				setContador((prev) => prev + 1)
			}, 1000)
		setIntervalid(_intervalid)
	}, [])
	return (
		<SecondsCounter
			firstDigit={Math.floor(contador % 10)}
			secondDigit={Math.floor(contador / 10 % 10)}
			thirdDigit={Math.floor(contador / 100 % 10)}
			fourthDigit={Math.floor(contador / 1000 % 10)}
			reload={() => {
				setContador(0)
				
			}}
			stop={() => {
				clearInterval(intervalid)
				setIntervalid(undefined)
			}}
			resume={() => {const _intervalid = setInterval(() => {
				setContador((prev) => prev + 1)
			}, 1000)
		setIntervalid(_intervalid)}} />
	);
};

export default Home;
