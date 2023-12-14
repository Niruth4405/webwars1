import Note from './Note';
import AddNote from './AddNote';
import styles from './planner.module.css';
const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className={styles.Note}>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
