import { SnapshotMemo } from "@/types/snapshot";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  memo: Pick<SnapshotMemo, "type" | "content">;
};

const MemoCellInner = ({ memo: { type, content } }: Props) => {
  return <div className={cx("container", type)}>{content}</div>;
};

export default MemoCellInner;
