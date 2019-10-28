import React from 'react';

export default function Segment(props) {
	// index.js에서 사용한 <Segment> 태그의 자식으로 선언된 자식들을
	// props.children으로 사용할 수 있음
	const [header, button] = props.children;

	return (
		<div className="ui placeholder segment">
			{header}
			{button}
		</div>
	);
}
