import React from 'react';

// one way to export named function
// IF WANT TO USE STATE USE A CLASS NOT A FUNCTION

export default function PageHeader(props) {
	// do not need 'this' because function, not class
	return (
		<header>
			<h1>{props.title}</h1>
		</header>
	);
}

/*
// alternative
const PageHeader = props => {
	return (
		<header>
			<h1>{props.title}</h1>
		</header>
	);
};
export default PageHeader;
*/
