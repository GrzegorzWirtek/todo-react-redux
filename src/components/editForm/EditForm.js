import './EditForm.css';
import saveIco from '../../icons/save-solid.svg';
import { useRef, useEffect, useState } from 'react';

const EditForm = () => {
	const [value, setValue] = useState(
		'To jest jakiś tekst i jest on dość długi, ale co z tego, należy zobaczyć jak się zachowuje w różnych sytuacjach',
	);
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const textareaRef = useRef();
	useEffect(() => {
		textareaRef.current.focus();
		textareaRef.current.select();
	}, []);
	return (
		<>
			<section className='item-content'>
				<textarea
					className='item-text item-text-area'
					value={value}
					ref={textareaRef}
					onChange={handleChange}></textarea>
				<p className='item-date item-date--edit'>26-12-2022 16:52</p>
			</section>
			<nav className='item-nav'>
				<img
					className='item-icon item-icon--save'
					src={saveIco}
					alt='Save'
					title='Save'
				/>
			</nav>
		</>
	);
};

export default EditForm;
