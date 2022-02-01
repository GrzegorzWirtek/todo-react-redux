import './Item.css';

import editIco from '../../icons/edit-solid.svg';
import deleteIco from '../../icons/trash-alt-solid.svg';
import EditForm from '../editForm/EditForm';

import { creators } from '../../state/creatorsIndex';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const Item = ({ data }) => {
	const { isEdit, content, date, id } = data;

	const dispatch = useDispatch();
	const { editTask, deleteTask } = bindActionCreators(creators, dispatch);

	const handleEdit = (e) => {
		editTask({ id: e.target.id });
	};

	const handleDelete = (e) => {
		deleteTask({ id: e.target.id });
	};

	const taskComponent = isEdit ? (
		<article className='item-article item-article--edit'>
			<EditForm data={data} />
		</article>
	) : (
		<article className='item-article'>
			<section className='item-content'>
				<p className='item-text'>{content}</p>
				<p className='item-date'>{date}</p>
			</section>
			<nav className='item-nav'>
				<img
					className='item-icon'
					src={editIco}
					alt='Edit'
					title='Edit'
					id={id}
					onClick={handleEdit}
				/>
				<img
					className='item-icon'
					src={deleteIco}
					alt='Delete'
					title='Delete'
					id={id}
					onClick={handleDelete}
				/>
			</nav>
		</article>
	);

	return <>{taskComponent}</>;
};

export default Item;
