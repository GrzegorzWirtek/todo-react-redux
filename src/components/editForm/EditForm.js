import './EditForm.css';
import saveIco from '../../icons/save-solid.svg';
import { useRef, useEffect, useState } from 'react';

import { creators } from '../../state/creatorsIndex';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const EditForm = ({ data }) => {
	const { content, id, date } = data;
	const [value, setValue] = useState(content);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const textareaRef = useRef();
	useEffect(() => {
		textareaRef.current.focus();
		textareaRef.current.select();
	}, []);

	const dispatch = useDispatch();
	const { updateTask } = bindActionCreators(creators, dispatch);

	const handleSave = (e) => {
		const dateNow = new Date();
		const date = dateNow.toLocaleString();

		updateTask({ id: e.target.id, content: value, date });
	};

	return (
		<>
			<section className='item-content'>
				<textarea
					className='item-text item-text-area'
					value={value}
					ref={textareaRef}
					onChange={handleChange}></textarea>
				<p className='item-date item-date--edit'>{date}</p>
			</section>
			<nav className='item-nav'>
				<img
					className='item-icon item-icon--save'
					src={saveIco}
					alt='Save'
					title='Save'
					id={id}
					onClick={handleSave}
				/>
			</nav>
		</>
	);
};

export default EditForm;
