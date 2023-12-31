import { useMemo } from "react";
import styles from "./BreadcrumbItemPrevious.module.css";

const BreadcrumbItemPrevious = ({
  breadcrumb,
  breadcrumbItemPreviousWidth,
  breadcrumbItemPreviousPosition,
  breadcrumbItemPreviousTop,
  breadcrumbItemPreviousLeft,
  breadcrumbFontSize,
  breadcrumbColor,
  breadcrumbWhiteSpace,
}) => {
  const breadcrumbItemPreviousStyle = useMemo(() => {
    return {
      width: breadcrumbItemPreviousWidth,
      position: breadcrumbItemPreviousPosition,
      top: breadcrumbItemPreviousTop,
      left: breadcrumbItemPreviousLeft,
    };
  }, [
    breadcrumbItemPreviousWidth,
    breadcrumbItemPreviousPosition,
    breadcrumbItemPreviousTop,
    breadcrumbItemPreviousLeft,
  ]);

  const breadcrumbStyle = useMemo(() => {
    return {
      fontSize: breadcrumbFontSize,
      color: breadcrumbColor,
      whiteSpace: breadcrumbWhiteSpace,
    };
  }, [breadcrumbFontSize, breadcrumbColor, breadcrumbWhiteSpace]);

  return (
    <div
      className={styles.breadcrumbitemprevious}
      style={breadcrumbItemPreviousStyle}
    >
      <div className={styles.breadcrumb} style={breadcrumbStyle}>
        {breadcrumb}
      </div>
    </div>
  );
};

export default BreadcrumbItemPrevious;
