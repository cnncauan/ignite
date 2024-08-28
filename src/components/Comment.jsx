import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

import bem from '../assets/bem.jpeg'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        onDeleteComment(content);
    }

    function handLikeComment () {
        setLikeCount((state) => {
            return state + 1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={bem}/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Maria Eduarda</strong>
                            <time title="09 de agosto às 17:35" dateTime="2024-08-09 17:33:00" >Cerca de 1h há atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        A plaudir  
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}