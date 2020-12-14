import { Fragment } from 'react';
import '../Styles/forum.css';
import PropTypes from 'prop-types';

export const DiscussionCard = (props) => {
    return (
        <Fragment>
            <div className="forum-discussion-card">
                <h2 className="forum-discussion-card-title">{props.discussionTitle}</h2>
                <p className="forum-discussion-card-description">{props.discussionDescription}</p>
            </div>
        </Fragment>
    );
}

DiscussionCard.propTypes = {
    discussionTitle: PropTypes.string,
    discussionDescription: PropTypes.string
}
