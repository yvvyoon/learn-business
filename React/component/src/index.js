import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import Segment from './components/Segment';
import Message from './components/Message';
import ApprovalCard from './components/ApprovalCard';
import CommentDetail from './components/CommentDetail';

// class형 컴포넌트
class App extends React.Component {
	// constructor는 알아서 선언되도록 babel에 설정되어 있음
	// constructor() {
	// 	super();
	// }

	// state가 변경될 때마다 Re-redering됨
	state = {
		comments: [],
		subtitle: 'Hi. My name is Marco',
	};

	handleAddComment = () => {
		const newComment = {
			author: faker.name.firstName(),
			time: faker.date.recent().toLocaleString(),
			body: faker.lorem.sentence(),
			avatar: faker.image.avatar(),
		};

		this.setState({ comments: [newComment, ...this.state.comments] });
	};

	// handlePlus = () => {
	// 	화면을 Re-rendering하려면 setState를 사용해야 함
	// 	this.setState({ number: this.state.number + 1 });
	// 	this.state = { number: this.state.number + 1 };
	// 	console.log(this.state);
	// };

	render() {
		console.log('Re-rendering');

		return (
			<>
				{/* <span>{this.state.number}</span>
				<button onClick={this.handlePlus}>플러스</button> */}
				<Segment>
					<div className="ui icon header">
						<i className="pdf file outline icon">No document</i>
					</div>
					<div className="ui primary button">Add document</div>
				</Segment>
				<Segment>
					<h4 className="ui header">For your information</h4>
					<p>{this.state.subtitle}</p>
				</Segment>
				<div className="ui container comments">
					<button
						className="ui primary button"
						onClick={this.handleAddComment}
					>
						코멘트 추가하기
					</button>
				</div>
				<Message
					header="회원 약관 변경"
					body="약관이 변경되었습니다. 동의?보감?"
				></Message>
				<div className="ui container comments">
					<ApprovalCard>
						<h4>복습 각?</h4>
						<p>남아공 ㄱ</p>
					</ApprovalCard>

					{this.state.comments.map(comments => {
						return (
							<ApprovalCard>
								<CommentDetail {...comments} />
							</ApprovalCard>
						);
					})}

					<ApprovalCard>
						<CommentDetail
							author={faker.name.firstName()}
							time={faker.date.recent().toLocaleString()}
							body={faker.lorem.sentence()}
							avatar={faker.image.avatar()}
						></CommentDetail>
					</ApprovalCard>
				</div>
			</>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
