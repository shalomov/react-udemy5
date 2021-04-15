import React, { useState, Fragment } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const renderedItems = items.map((item, index) => {
		const onTitleClick = (index) => () => setActiveIndex(index);
		const active = index === activeIndex ? 'active' : '';

		return (
			<Fragment key={item.title}>
				<div className={`title ${active}`} onClick={onTitleClick(index)}>
					<i className="dropdown icon" />
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</Fragment>
		);
	});

	return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
