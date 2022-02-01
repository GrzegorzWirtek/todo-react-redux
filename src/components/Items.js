import Item from './item/Item';

const Items = () => {
	const items = [1].map((item) => <Item key={item} />);

	return <>{items}</>;
};

export default Items;
