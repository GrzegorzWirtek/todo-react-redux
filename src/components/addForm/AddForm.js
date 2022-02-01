import './AddForm.css';

const AddForm = () => {
	return (
		<>
			<section className='add-wrapper'>
				<h1 className='add-title'>Add task</h1>
				<form className='add-form'>
					<textarea
						className='add-textarea'
						placeholder='Write here...'></textarea>
					<button className='add-button'>Add</button>
				</form>
			</section>
		</>
	);
};

export default AddForm;
