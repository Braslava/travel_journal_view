import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import data from './data';

function App() {
	const cardElements = data.map((item) => {
		return <Card key={item.id} item={item} />;
	});
	return (
		<div className="App">
			<Header />
			<section className="card-grid">
        {cardElements}
      </section>
		</div>
	);
}

export default App;
