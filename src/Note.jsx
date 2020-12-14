import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

const Note = (props) => {

    const deleteEvent = (event) => {
        props.deleteItem(props.id);
        event.preventDefault();
    };

    return (
        <>
            <div className="card shadow-sm bg-white rounded ml-2 mt-5" style={{ width: 300 }}>
                <div className="card-body">
                    <form className="d-flex flex-column">
                        <input type="text" placeholder="Title" style={{ border: 'none' }} autoComplete="off" defaultValue={props.title} />
                        <br />
                        <textarea rows="" coulmns="" defaultValue={props.content} placeholder="Write a note" style={{ border: 'none' }} />
                        <span className="d-flex justify-content-end">
                            <button onClick={deleteEvent} style={{ border: 'none', backgroundColor: 'white' }}>
                                <DeleteOutlineIcon className="color shadow-sm bg-white rounded-circle p-2 text-white text-warning" style={{ fontSize: 35, fontWeight: 'bolder' }} />
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Note;