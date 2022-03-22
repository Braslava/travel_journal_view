import { IoLocationSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import './Card.css';

function LocationIcon() {
	return (
		<IconContext.Provider
			value={{
				color: '#F55A5A',
				size: '1em',
				className: 'card__location-icon',
			}}
		>
			<span>
				<IoLocationSharp />
			</span>
		</IconContext.Provider>
	);
}

function Card(props) {
	return (
		<div className="card">
			<img
				className="card__img"
				src={props.item.imageUrl}
				alt={props.item.title}
			></img>
			<div className="card__info">
				<p className="card__p card__p--flex">
					<LocationIcon /> {props.item.location}{' '}
					<a className="card__link" href={props.item.googleMapsUrl} rel="noreferrer" target="_blank">
						View on Google Maps
					</a>
				</p>
                <h2 className="card__heading">{props.item.title}</h2>
				<p className="card__p bold">
					{props.item.startDate} - {props.item.endDate}
				</p>
				<p className="card__p">{props.item.description}</p>
			</div>
		</div>
	);
}

export default Card;
