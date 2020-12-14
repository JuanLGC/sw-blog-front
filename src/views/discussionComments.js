import { Fragment, useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Header } from '../Components/header';
import { NavBar } from '../Components/navbar';
import Modal from 'react-modal'
import { Context } from "../store/appContext";
import '../Styles/comments.css';

export const DiscussionComments = () => {
    let params = useParams();
    const { store, actions } = useContext(Context);
    const [allComments, setAllComments] = useState(store.comment);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentContent, setCommentContent] = useState("");
    const [arrayOfComments, setArrayOfComments] = useState([])

    useEffect(()=> {
        actions.getOneDiscussion(params.id);
    }, [])

    useEffect(()=>{
            setAllComments(store.comment);
            setArrayOfComments(store.comment.comments);
    }, [store.comment])

    useEffect(()=>{
        if (allComments.comments !== undefined){
            if (allComments.comments.length !== arrayOfComments.length && arrayOfComments.length > 0 ){
                console.log(arrayOfComments)
                actions.addComment(params.id, arrayOfComments)
        }}
    }, [arrayOfComments])

    Modal.setAppElement('#root');
    return (
        <Fragment>
            <Header />
            <NavBar />
            <div className="comments-title-box">
                <h2>
                    {allComments.title}
                </h2>
                <p>{allComments.description}</p>
            </div>
            {allComments.comments !== undefined ? allComments.comments.map((item, index) => {
                return (
                <div key={index} className="comment-content-box">
                    <p className="comment-author">{item.name + " says:"}</p>
                    <p className="comment-content">{item.comment}</p>
                </div>
                )
            }) : "...Loading, Please Wait"
            }
            <div className="comment-add-button-box">
                <button className="comment-add-button" onClick={()=>{
                    setModalIsOpen(true);
                }}>+</button>
            </div>
            <Modal className="forum-button-modal" overlayClassName="forum-button-modal-overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h5 className="forum-modal-title">What are we talking about today, young padawan?</h5>
                    <div className="modal-form">
                        <label className="forum-modal-input-label">Your Name</label>
                        <input type="text" className="forum-modal-input" onChange={(e)=>{setCommentAuthor(e.target.value)}}></input>
                        <label className="forum-modal-input-label">Comment</label>
                        <textarea type="text" className="forum-modal-input" onChange={(e)=>{setCommentContent(e.target.value)}}></textarea>
                    </div>
                    <div className="modal-buttons">
                        <button 
                            className="modal-button" 
                            onClick={()=>{
                                setArrayOfComments([...arrayOfComments, {"name": commentAuthor, "comment": commentContent}])
                                setModalIsOpen(false);
                            }}>Publish</button>
                        <button 
                            className="modal-button" 
                            onClick={() => {
                                setModalIsOpen(false);
                            }}>Cancel</button>
                    </div>
                </Modal>
        </Fragment>
    )
}