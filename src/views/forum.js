import { Fragment } from 'react';
import { Header } from '../Components/header';
import { NavBar } from '../Components/navbar';
import { StartDiscussion } from '../Components/startNewDiscussionButton';

export const Forum = () => {
    return (
        <Fragment>
            <Header/>
            <NavBar />
            <div className="forum-button-container">
                <StartDiscussion />
            </div>
        </Fragment>
    )
}