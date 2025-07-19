import PropTypes from "prop-types";
import styles from "./SuccessMessage.module.css";
import { useEffect, useRef, useState } from "react";

const SuccessMessage = ({ visible }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animate, setAnimate] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  useEffect(() => {
    if (!hasMounted.current) return;

    let timeout;

    if (visible) {
      setShouldRender(true);
      timeout = setTimeout(() => {
        setAnimate(true);
      }, 10);
    } else {
      setAnimate(false);
      timeout = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles.container} ${
        animate ? styles.visible : styles.hidden
      }`}
    >
      <span>Successfully Added to Cart</span>
    </div>
  );
};

SuccessMessage.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default SuccessMessage;
