import Item from './item/Item';
import { useSelector } from 'react-redux';

const Items = () => {
	const state = useSelector((state) => state.reducer);
	const items =
		state.length > 0
			? state.map((item) => <Item key={item.id} data={item} />)
			: null;

	return <>{items}</>;
};

export default Items;
