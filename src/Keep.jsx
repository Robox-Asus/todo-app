import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import './background.css';
import './keep.css';

const Keep = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((oldData) => {
            return [...oldData, note];
        });
    };

    const onDelete = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((value, index) => index !== id);
        });
    };

    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />
            <div className="grid">
                {
                    addItem.map((value, index) => {
                        return <Note key={index} id={index} title={value.title} content={value.content} deleteItem={onDelete} />
                    })
                }
            </div>
            <Footer />
        </>
    );
};

export default Keep;