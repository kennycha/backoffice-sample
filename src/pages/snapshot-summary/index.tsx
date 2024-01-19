import styles from "./index.module.scss";
import classNames from "classnames/bind";
import DateRangePicker from "@/components/DateRangePicker";
import PageTitle from "@/components/PageTitle";
import SnapshotSummaryTable from "@/components/SnapshotSummaryTable";
import GeneralLayout from "@/components/GeneralLayout";
import LocationCombobox from "@/components/LocationCombobox";

const cx = classNames.bind(styles);

const PAGE_TITLE = "스냅샷 이슈/메모 종합";

const SnapshotSummaryPage = () => {
  return (
    <GeneralLayout>
      <div className={cx("page-title-wrapper")}>
        <PageTitle title={PAGE_TITLE} />
      </div>
      <div className={cx("controls")}>
        <LocationCombobox />
        <DateRangePicker />
      </div>
      <div className={cx("snapshot-summary-table-wrapper")}>
        <SnapshotSummaryTable />
      </div>
    </GeneralLayout>
  );
};

export default SnapshotSummaryPage;
