import React from 'react';
import {useState} from 'react';
import RegisterOrEdit from '../../Components/RegisterOrEdit';


function RegisterPage(){

    const [titleValue, setTitleValue] = useState("")
    const [contentValue,setContentValue] = useState("")
    const [isForUpdate, setIsForUpdate] = useState(false);

    const onTitleChange = (event) => { setTitleValue(event.currentTarget.value); }
    console.log(titleValue);

    const onContentChange = (event) => { setContentValue(event.currentTarget.value); }; 
    console.log(contentValue);

    const onSubmitArticle = (event) => {
        event.preventDefault();
        const article = { title: titleValue, content: contentValue};
        console.log(article);
    };

    return (
        <>
        <RegisterOrEdit 
        titleValue={titleValue}
        contentValue={contentValue}
        handleTitleChange={onTitleChange}
        handleContentChange={onContentChange}
        handleSubmit={onSubmitArticle}
        updateRequest={isForUpdate}
        />
        </>
    );
}

export default RegisterPage;