import React from 'react';
import styled from 'styled-components';

const PhoneCard = (props) => {
	const { phone } = props;
	const p = phone[0];
	return (
		<Card>
			<div className="top-section">
				<div className="thumbnail">
					<img src={p.image} alt={p.name} />
				</div>

				<div>
					<p>
						CPU: <span>{p.cpu}</span>
					</p>
					<p>
						camera: <span>{p.camera}</span>
					</p>
					<p>
						size: <span>{p.size}</span>
					</p>
					<p>
						weight: <span>{p.weight}</span>
					</p>
					<p>
						display: <span>{p.display}</span>
					</p>
					<p>
						battery: <span>{p.battery}</span>
					</p>
					<p>
						memory: <span>{p.memory}</span>
					</p>
				</div>
			</div>

			<div className="bottom-card">
				<div className="bottom-t">
					<h3>{p.name}</h3>
					<h3>$ {p.price} </h3>
				</div>
				<div className="bottom-b">
					<p>{p.description}</p>
				</div>
			</div>
		</Card>
	);
};

const Card = styled.div`
	display: flex;
	flex-direction: column;
	/* max-width: 55%; */

	border: 1px solid black;
	padding: 20px;
	margin-top: 30px;

	&:hover {
		border: 2px solid purple;
	}

	.top-section {
		display: flex;
		justify-content: space-between;

		p {
			padding-bottom: 10px;
			font-size: 19px;
			border-bottom: 1px dashed black;
		}

		span {
			font-size: 15px;
			font-style: italic;
		}
	}

	.bottom-t {
		display: flex;
		justify-content: space-between;
	}
`;

export default PhoneCard;
