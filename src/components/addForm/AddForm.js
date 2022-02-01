import './AddForm.css';

import { creators } from '../../state/creatorsIndex';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const AddForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();
	const { addTask } = bindActionCreators(creators, dispatch);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.length < 1) return;
		const dateNow = new Date();
		const date = dateNow.toLocaleString();
		const id = Date.now();
		addTask({ id, date, content: value, isEdit: false });
		setValue('');
	};

	return (
		<>
			<section className='add-wrapper'>
				<h1 className='add-title'>Add task</h1>
				<form onSubmit={handleSubmit} className='add-form'>
					<textarea
						className='add-textarea'
						placeholder='Write here...'
						value={value}
						onChange={(e) => setValue(e.target.value)}></textarea>

					<button type='submit' className='add-button'>
						Add
					</button>
				</form>
			</section>
		</>
	);
};

export default AddForm;
