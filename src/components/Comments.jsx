import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState({});

  // Handle new comment addition
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        { id: Date.now(), text: newComment, likes: 0, replies: [] },
        ...comments,
      ]);
      setNewComment("");
    }
  };

  // Handle like action
  const handleLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  // Handle reply action
  const handleReply = (id, replyText) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                { id: Date.now(), text: replyText },
              ],
            }
          : comment
      )
    );
  };

  return (
    <div className="app">
      <div className="comment-box">
        <textarea
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button onClick={handleAddComment}>Comment</button>
      </div>

      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p>{comment.text}</p>
            <div className="comment-actions">
              <span onClick={() => handleLike(comment.id)}>
                👍 {comment.likes}
              </span>
              <span
                onClick={() =>
                  handleReply(comment.id, prompt("Enter your reply:"))
                }
              >
                Reply
              </span>
            </div>
            {comment.replies.length > 0 && (
              <div className="replies">
                {comment.replies.map((reply) => (
                  <p key={reply.id} className="reply-item">
                    {reply.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
        {comments.length > 0 && (
          <button className="load-more">Load More Comments</button>
        )}
      </div>
    </div>
  );
};

export default Comments;
