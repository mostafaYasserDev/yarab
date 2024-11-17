import React, { useState, useEffect } from "react";
import { fetchData, postData, patchData } from "../services/api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const loadComments = async () => {
      const data = await fetchData("comments"); // جلب التعليقات من الـ API
      if (data) setComments(data);
    };

    loadComments();
  }, []);

  // إضافة تعليق جديد
  const handleAddComment = async () => {
    if (newComment.trim()) {
      const newCommentData = {
        text: newComment,
        author: "Anonymous", // يمكنك إضافة طريقة لجلب اسم الكاتب
        likes: 0,
        dislikes: 0, // إضافة ديسلايك افتراضي
        replies: [],
      };

      const addedComment = await postData("comments", newCommentData); // إرسال التعليق إلى API
      if (addedComment) {
        setComments([addedComment, ...comments]);
        setNewComment("");
      }
    }
  };

  // إضافة ديسلايك
  const handleDislike = async (id) => {
    const updatedComment = await patchData(`comments/${id}/dislike`); // تحديث التعليق في الـ API لإضافة ديسلايك
    if (updatedComment) {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === id
            ? { ...comment, dislikes: comment.dislikes + 1 }
            : comment
        )
      );
    }
  };

  // الرد على تعليق
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
            <p>
              <strong>By: </strong>
              {comment.author}
            </p>
            <div className="comment-actions">
              <span>👍 {comment.likes}</span>
              <span onClick={() => handleDislike(comment.id)}>
                👎 {comment.dislikes}
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
