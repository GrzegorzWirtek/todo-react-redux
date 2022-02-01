import './Item.css';

import editIco from '../../icons/edit-solid.svg';
import deleteIco from '../../icons/trash-alt-solid.svg';
import EditForm from '../editForm/EditForm';

const Item = () => {
	return (
		<>
			<article className='item-article'>
				<section className='item-content'>
					<p className='item-text'>
						To jest jakiś tekst i jest on dość długi, ale co z tego, należy
						zobaczyć jak się zachowuje w różnych sytuacjach
					</p>
					<p className='item-date'>26-12-2022 16:52</p>
				</section>
				<nav className='item-nav'>
					<img className='item-icon' src={editIco} alt='Edit' title='Edit' />
					<img
						className='item-icon'
						src={deleteIco}
						alt='Delete'
						title='Delete'
					/>
				</nav>
			</article>
			<article className='item-article item-article--edit'>
				<EditForm />
			</article>
		</>
	);
};

export default Item;
