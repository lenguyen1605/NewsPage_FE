import {React, useState} from "react";
import 'primeicons/primeicons.css';
import '../pages/styles.css'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';      
import Action from "./action";

// , handleInsertNode, handleDelete, handleEditNode
const Comment = ({comment}) => {
    
    const [input, setInput] = useState("")

    const onAddComment = () => {
        // handleInsertNode(comment.id_comment, input);
        setInput("")
    }

    const [disabled, setDisabled] = useState(true)
    const [edit,setEdit] = useState(false)
    const [showInput, setShowInput] = useState (false)
    const handleNewComment = () => {
        setShowInput(!showInput)
    }

    return (
        <div>
            <div className={comment?.id_comment === 1 ? "inputContainer": ""}>
                {comment?.id_comment === 1 ? (
                    <>
                        <InputText type = "text" className="inputContainer"
                        style={{width: '70%'}}
                        value = {input}
                        onChange={(e) => setInput(e.value)}
                        placeholder="Let us know your opinion!"
                        />  
                        {/* <Action className = "reply comment" type= "COMMENT" handleClick={onAddComment}></Action> */}
                        <Button className="commentButton" type="submit" icon="pi pi-check" severity="danger"
                            style={{width: '15%', backgroundColor: 'black', border: 'black', color:'rgba(255, 192, 203, 1)' }}
                            onClick={onAddComment}/>
                    </>
                    ) : (
                        <>
                            {/* <span style = {{wordWrap: 'break-word'}}>
                                {comment?.content}
                            </span> */}
                            {/* <div>
                                <Action className="reply" type="Reply"></Action>
                                <Action className="reply" type = "Edit"></Action>
                                <Action className = "reply" type = "Delete"></Action>
                            </div> */}
                             <div style = {{marginTop: '10px'}}>
                               <InputText style={{width: '70%', color: 'black'}} disabled ={disabled}  value ={comment?.content} ></InputText>
                             </div>
                             <div style={{display: "flex"}}>
                                {edit ? (
                                    <>
                                        <Action className="reply" type="Save"></Action>
                                        <Action className="reply" type = "Cancel" 
                                            handleClick={() => {
                                                setEdit(false)
                                                setDisabled(true)
                                                }}>
                                        </Action>
                                    </>
                                ): (
                                    <>
                                        <Action className="reply" type="Reply"
                                            handleClick={handleNewComment}
                                        ></Action>
                                        <Action className="reply" type = "Edit"
                                            handleClick={() => {
                                                setEdit(true);
                                                setDisabled(false)
                                            }}
                                        ></Action>
                                        <Action className = "reply" type = "Delete"></Action>
                                    </>
                                )}
                               
                            </div>
                        </>
                    )}
            </div>

            <div style ={{paddingLeft: 25}}>
                {showInput && (
                    <div>
                        <InputText style={{width: '70%', color: 'black'}}  type="text" onChange={(e) => setInput(e.value)}>
                        </InputText>
                        <div style={{display: "flex"}}>
                            <Action className="reply" type = "Reply"></Action>
                            <Action className = "reply" type = "Cancel"
                                handleClick={handleNewComment}
                            ></Action>
                        </div>
                    
                    </div>
                )}
                {comment?.items?.map((cmt) => {
                    return <Comment key ={cmt?.items?.id_comment} comment = {cmt}
                        // handleInsertNode={handleInsertNode}
                        // handleDelete={handleDelete}
                        // handleEditNode={handleEditNode}
                    />
                })}
            </div>

        </div>
    )
}

export default Comment;