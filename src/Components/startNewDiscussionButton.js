import { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import '../Styles/forum.css';
import Modal from 'react-modal'
import { DiscussionCard } from './discussionCard';

export const StartDiscussion = () => {
    const { store, actions } = useContext(Context);
    const [allDiscussions, setAllDiscussions] = useState(store.Forum);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [inputTitle, setInputTitle] = useState("");
    const [inputDescription, setInputDescription] = useState("");
    const [failedClass, setfailedClass] = useState("forum-failed-post");

    useEffect(() => {
        if (allDiscussions.length !== store.Forum.length) {
            setAllDiscussions(store.Forum);
        }
    }, [store.Forum])

    Modal.setAppElement('#root');
    return (
        <Fragment>
            <div className="discussion-content">
                <button className="forum-startDiscussion-button" onClick={()=>{
                    setModalIsOpen(true);
                }}>
                    Start New Discussion
                </button>
                <Modal className="forum-button-modal" overlayClassName="forum-button-modal-overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h5 className="forum-modal-title">What are we talking about today, young padawan?</h5>
                    <p className={failedClass + " forum-post-message"}>All fields are mandatory</p>
                    <div className="modal-form">
                        <label className="forum-modal-input-label">Title</label>
                        <input type="text" className="forum-modal-input" onChange={(e)=>{setInputTitle(e.target.value)}}></input>
                        <label className="forum-modal-input-label">Description</label>
                        <textarea type="text" className="forum-modal-input" onChange={(e)=>{setInputDescription(e.target.value)}}></textarea>
                    </div>
                    <div className="modal-buttons">
                        <button 
                            className="modal-button" 
                            onClick={()=>{
                                if (inputTitle !== "" && inputDescription !== ""){
                                    setfailedClass("forum-failed-post");
                                    actions.startNewDiscussion(inputTitle, inputDescription);
                                    setModalIsOpen(false);
                                } else {
                                    setfailedClass("");
                                }
                            }}>Publish</button>
                        <button 
                            className="modal-button" 
                            onClick={() => {
                                setModalIsOpen(false);
                            }}>Cancel</button>
                    </div>
                </Modal>
                <div className="forum-cards-container">
                    {allDiscussions.map((item, index) => {
                        return (
                            <Link to={"forum/discussion/" + item._id}>
                                <DiscussionCard key={index} discussionTitle={item.title} discussionDescription={item.description}/>
                            </Link>
                        )
                    })}                    
                </div>
            </div>
        </Fragment>
    )
}