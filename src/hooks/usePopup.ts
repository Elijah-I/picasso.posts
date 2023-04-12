import React from 'react';
import { commentsApi } from 'store/api/comments.api';

export const usePopup = () => {
  const [popup, setPopup] = React.useState<boolean>(false);
  const [, result] = commentsApi.useAddCommentMutation({ fixedCacheKey: 'myCacheKey' });
  const requestId = React.useRef(result.requestId);

  React.useEffect(() => {
    if (result.status === 'fulfilled' && requestId.current !== result.requestId) {
      setPopup(true);
      requestId.current = result.requestId;

      setTimeout(() => {
        setPopup(false);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.status]);

  return [popup];
};
