import { useMemo } from "react";
import styles from "./ButtonBase.module.css";

const ButtonBase = ({
  text,
  buttonBaseBackgroundColor,
  buttonBaseBorder,
  buttonBaseHeight,
  buttonBasePadding,
  heightStructureHeight,
  buttonBodyGap,
  iconPadding,
  divFontSize,
  divLineHeight,
  textColor,
  textFontSize,
  iconPadding1,
  divFontSize1,
  divLineHeight1,
  minWidthPadding,
  contentBackgroundColor,
}) => {
  const buttonBaseStyle = useMemo(() => {
    return {
      backgroundColor: buttonBaseBackgroundColor,
      border: buttonBaseBorder,
      height: buttonBaseHeight,
      padding: buttonBasePadding,
    };
  }, [
    buttonBaseBackgroundColor,
    buttonBaseBorder,
    buttonBaseHeight,
    buttonBasePadding,
  ]);

  const heightStructureStyle = useMemo(() => {
    return {
      height: heightStructureHeight,
    };
  }, [heightStructureHeight]);

  const buttonBodyStyle = useMemo(() => {
    return {
      gap: buttonBodyGap,
    };
  }, [buttonBodyGap]);

  const iconStyle = useMemo(() => {
    return {
      padding: iconPadding,
    };
  }, [iconPadding]);

  const divStyle = useMemo(() => {
    return {
      fontSize: divFontSize,
      lineHeight: divLineHeight,
    };
  }, [divFontSize, divLineHeight]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
      fontSize: textFontSize,
    };
  }, [textColor, textFontSize]);

  const icon1Style = useMemo(() => {
    return {
      padding: iconPadding1,
    };
  }, [iconPadding1]);

  const div1Style = useMemo(() => {
    return {
      fontSize: divFontSize1,
      lineHeight: divLineHeight1,
    };
  }, [divFontSize1, divLineHeight1]);

  const minWidthStyle = useMemo(() => {
    return {
      padding: minWidthPadding,
    };
  }, [minWidthPadding]);

  const contentStyle = useMemo(() => {
    return {
      backgroundColor: contentBackgroundColor,
    };
  }, [contentBackgroundColor]);

  return (
    <div className={styles.buttonbase} style={buttonBaseStyle}>
      <div className={styles.widthStructure}>
        <div className={styles.heightStructure} style={heightStructureStyle}>
          <div className={styles.buttonBody} style={buttonBodyStyle}>
            <div className={styles.icon} style={iconStyle}>
              <div className={styles.div} style={divStyle}>
                
              </div>
            </div>
            <b className={styles.text} style={textStyle}>
              {text}
            </b>
            <div className={styles.icon} style={icon1Style}>
              <div className={styles.div} style={div1Style}>
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.minwidth} style={minWidthStyle}>
          <div className={styles.content} style={contentStyle} />
        </div>
      </div>
    </div>
  );
};

export default ButtonBase;
