import React from 'react';
import { commentsApi } from 'store/api/comments.api';
import type { AddPostCommentProps } from 'types/props/posts.porps.types';
import styles from './AddPostComment.module.scss';

const AddPostComment = (props: AddPostCommentProps) => {
  const { postId } = props;
  const [name, setName] = React.useState('');
  const [body, setBody] = React.useState('');

  const [addComment] = commentsApi.useAddCommentMutation({ fixedCacheKey: 'myCacheKey' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !body) return;

    setName('');
    setBody('');

    addComment({
      postId,
      name,
      body,
      email: 'fake@mail.ru',
    });
  };

  return (
    <form className={styles.add} onSubmit={handleSubmit}>
      <div className={styles.add__line}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <button type="submit">comment</button>
      </div>
      <textarea value={body} onChange={(event) => setBody(event.target.value)}></textarea>
    </form>
  );
};

export default AddPostComment;
