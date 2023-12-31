import { useMemo } from "react";
import ButtonBase from "./ButtonBase";
import styles from "./ButtonDefaultLargeLinkDefa.module.css";

const ButtonDefaultLargeLinkDefa = ({
  text,
  buttonDefaultLargeLinkDefAlignItems,
  buttonDefaultLargeLinkDefJustifyContent,
  buttonDefaultLargeLinkDefPosition,
  buttonDefaultLargeLinkDefTop,
  buttonDefaultLargeLinkDefLeft,
  buttonDefaultLargeLinkDefWidth,
  buttonBaseHeight,
  buttonBasePadding,
  heightStructureHeight,
  buttonBodyGap,
  iconPadding,
  divFontSize,
  divLineHeight,
  textFontSize,
  textColor,
  iconPadding1,
  divFontSize1,
  divLineHeight1,
  minWidthPadding,
  contentBackgroundColor,
}) => {
  const buttonDefaultLargeLinkDefaStyle = useMemo(() => {
    return {
      alignItems: buttonDefaultLargeLinkDefAlignItems,
      justifyContent: buttonDefaultLargeLinkDefJustifyContent,
      position: buttonDefaultLargeLinkDefPosition,
      top: buttonDefaultLargeLinkDefTop,
      left: buttonDefaultLargeLinkDefLeft,
      width: buttonDefaultLargeLinkDefWidth,
    };
  }, [
    buttonDefaultLargeLinkDefAlignItems,
    buttonDefaultLargeLinkDefJustifyContent,
    buttonDefaultLargeLinkDefPosition,
    buttonDefaultLargeLinkDefTop,
    buttonDefaultLargeLinkDefLeft,
    buttonDefaultLargeLinkDefWidth,
  ]);

  const buttonBaseStyle = useMemo(() => {
    return {
      height: buttonBaseHeight,
      padding: buttonBasePadding,
    };
  }, [buttonBaseHeight, buttonBasePadding]);

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
      fontSize: textFontSize,
      color: textColor,
    };
  }, [textFontSize, textColor]);

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
    <div
      className={styles.buttondefaultlargelinkdefa}
      style={buttonDefaultLargeLinkDefaStyle}
    >
      <ButtonBase
        text="Button"
        buttonBaseBackgroundColor="unset"
        buttonBaseBorder="unset"
        buttonBaseHeight="48px"
        buttonBasePadding="0px var(--padding-5xl)"
        heightStructureHeight="48px"
        buttonBodyGap="8px"
        iconPadding="0px var(--padding-12xs)"
        divFontSize="22px"
        divLineHeight="24px"
        textColor="#3182ce"
        textFontSize="18px"
        iconPadding1="0px var(--padding-12xs)"
        divFontSize1="22px"
        divLineHeight1="24px"
        minWidthPadding="0px var(--padding-5xl)"
        contentBackgroundColor="#c4c4c4"
      />
    </div>
  );
};

export default ButtonDefaultLargeLinkDefa;
