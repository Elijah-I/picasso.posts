import React from 'react';
import { CSSTransition } from 'react-transition-group';
import type { PopupProps } from 'types/props/popup.props.types';
import styles from './Popup.module.scss';

const Popup = (props: PopupProps) => {
  const { show, message } = props;

  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enter_active,
        enterDone: styles.enter_done,
        exit: styles.exit,
        exitActive: styles.exit_active,
        exitDone: styles.exit_done,
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={styles.notification}>{message}</div>
    </CSSTransition>
  );
};

export default Popup;
