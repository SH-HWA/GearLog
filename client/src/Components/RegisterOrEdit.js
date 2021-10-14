import React from "react"

function RegisterOrEdit(props){
return(
    <div>
            <form onSubmit>
                <br />
                <label>Title: </label>
                <input 
                onChange={props.handleTitleChange}
                value type="text" 
                value= {props.titleValue} 
                name= "title"/>
                <hr></hr>
                <div>
                    <textarea 
                    onChange = {props.handleContentChange}
                    value={props.contentValue} 
                    name ="content"/>
                </div>
                <button onClick={props.handleSubmit}>{props.updateRequest ? "수정" : "등록" }</button>
            </form>
        </div>
)

}

export default RegisterOrEdit;