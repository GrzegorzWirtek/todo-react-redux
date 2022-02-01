import './App.css';

import Items from './components/Items';
import AddForm from './components/addForm/AddForm';

function App() {
	return (
		<div className='App'>
			<AddForm />
			<Items />
		</div>
	);
}

export default App;
