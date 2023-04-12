import React from 'react';
import type { PostAuthorProps } from 'types/props/posts.porps.types';
import styles from './PostAuthor.module.scss';

const PostAuthor = (props: PostAuthorProps) => {
  const { author } = props;
  return (
    <div className={styles.author}>
      <b>
        {author.name} ({author.username})
      </b>
      <div>{author.company.name}</div>
      <div>{author.phone}</div>
      <a href={`https://${author.website}`} target="_blank" rel="noreferrer">
        {author.website}
      </a>
    </div>
  );
};

export default PostAuthor;
