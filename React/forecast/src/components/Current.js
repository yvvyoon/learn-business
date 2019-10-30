import React from 'react';
import StateIcon from './StateIcon';

export default function Current() {
	return (
		<>
			<section>
				<h1>현재 위치</h1>
				<article>
					<time>관측 시각</time>
					<p>날씨 상태</p>
				</article>
			</section>
			<section>
				<article>
					<StateIcon>
						<section>
							<p>기온</p>
							<span>ºC</span>
							<span>ºF</span>
						</section>
					</StateIcon>
				</article>
				<article>
					<p>강수량</p>
					<p>적설량</p>
					<p>습도</p>
					<p>풍속</p>
				</article>
			</section>
		</>
	);
}
