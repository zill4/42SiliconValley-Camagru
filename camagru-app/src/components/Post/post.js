import React from 'react';
import './post.css';
const Post = props => {
    return (
        <article className="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                    <img src="https://cdn.intra.42.fr/users/gaetan.jpg"></img>
                    </div>
                    <div className="Post-user-nickname">
                        <span>Bob</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Why is this?" src="https://cdn.intra.42.fr/users/rene.jpg"/>
                </div>
                <div className="Token-count">
                <button>Token</button>
                    <text>Token Count: 10 </text>
                </div>
            </div>
            <div className="Post-caption">
                <p>
                <strong>Bob: </strong>Why is this?
                </p>
                <div className="Post-input">
                <input type="text" placeholder="Comment..."/>
                <input type="submit" value="Post"/>
                </div>
            </div>
        
        </article>
    );
};

export default (Post);