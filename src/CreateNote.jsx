import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const InputEvent = (event) => {
        const { value, name } = event.target;

        setNote((oldData) => {
            return {
                ...oldData,
                [name]: value,
            };
        });
    };

    const addEvent = (event) => {
        event.preventDefault();
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        });
    };

    const expandIt = () => {
        setExpand(true);
    };

    const shrinkIt = () => {
        setExpand(false);
    };

    return (
        <>
            <div className="card shadow-sm bg-white rounded" style={{ width: 400, marginLeft: '34%' }}>
                <div className="card-body">
                    <form className="d-flex flex-column">
                        {expand?
                            <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" style={{ border: 'none' }} autoComplete="off" /> : null
                        } 
                        <br /> 
                        <textarea rows="" coulmns="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note" style={{ border: 'none' }} onClick={expandIt} onDoubleClick={shrinkIt} />
                        {expand ?
                            <span className="d-flex justify-content-end">
                                <button onClick={addEvent} style={{ border: 'none', backgroundColor: 'white' }}><AddIcon className="color shadow-sm bg-white rounded-circle p-2 text-white text-warning" style={{ fontSize: 40, fontWeight: 'bolder' }} /></button>
                            </span> : null
                        }
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateNote;