import { SnapshotIssueTypes } from "@/types/snapshot";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  issues: SnapshotIssueTypes[];
};

const ISSUE_MAP = {
  changedSpace: "공간변화",
  changedOrientation: "화각변화",
  incompatible: "비교불가",
};

const IssuesCellInner = ({ issues }: Props) => {
  return (
    <div className={cx("container")}>
      {issues.map((issue) => (
        <div key={issue} className={cx("item")}>
          <div className={cx("tag", issue)} />
          <p>{ISSUE_MAP[issue]}</p>
        </div>
      ))}
    </div>
  );
};

export default IssuesCellInner;
