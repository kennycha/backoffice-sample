import SnapshotSummaryTable from "../SnapshotSummaryTable";
import { ThemeProvider } from "../ThemeProvider";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className={cx("container")}>
        <div className={cx("page-title-wrapper")}>
          <h1 className={cx("page-title")}>스냅샷 이슈/메모 종합</h1>
        </div>
        <div className={cx("snapshot-summary-table-wrapper")}>
          <SnapshotSummaryTable />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
