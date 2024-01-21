import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  text: string;
};

const TextCellInner = ({ text }: Props) => {
  return <div className={cx("container")}>{text}</div>;
};

export default TextCellInner;
