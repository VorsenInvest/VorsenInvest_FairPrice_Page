import { useMemo } from "react";
import styles from "./AvatarsGroup3Horizontal.module.css";

const AvatarsGroup3Horizontal = ({
  avatarsGroup3HorizontalAv,
  avatarsGroup3HorizontalWidth,
  avatarsGroup3HorizontalHeight,
  avatarsGroup3HorizontalPosition,
  avatarsGroup3HorizontalTop,
  avatarsGroup3HorizontalLeft,
  avatarsGroup3HorizontalRight,
  avatarsGroup3HorizontalBottom,
  avatarsGroup3HorizontalMaxWidth,
  avatarsGroup3HorizontalOverflow,
  avatarsGroup3HorizontalMaxHeight,
}) => {
  const avatarsGroup3HorizontalStyle = useMemo(() => {
    return {
      width: avatarsGroup3HorizontalWidth,
      height: avatarsGroup3HorizontalHeight,
      position: avatarsGroup3HorizontalPosition,
      top: avatarsGroup3HorizontalTop,
      left: avatarsGroup3HorizontalLeft,
      right: avatarsGroup3HorizontalRight,
      bottom: avatarsGroup3HorizontalBottom,
      maxWidth: avatarsGroup3HorizontalMaxWidth,
      overflow: avatarsGroup3HorizontalOverflow,
      maxHeight: avatarsGroup3HorizontalMaxHeight,
    };
  }, [
    avatarsGroup3HorizontalWidth,
    avatarsGroup3HorizontalHeight,
    avatarsGroup3HorizontalPosition,
    avatarsGroup3HorizontalTop,
    avatarsGroup3HorizontalLeft,
    avatarsGroup3HorizontalRight,
    avatarsGroup3HorizontalBottom,
    avatarsGroup3HorizontalMaxWidth,
    avatarsGroup3HorizontalOverflow,
    avatarsGroup3HorizontalMaxHeight,
  ]);

  return (
    <img
      className={styles.avatarsGroup3Horizontal}
      alt=""
      src={avatarsGroup3HorizontalAv}
      style={avatarsGroup3HorizontalStyle}
    />
  );
};

export default AvatarsGroup3Horizontal;
