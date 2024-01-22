import styles from "./index.module.scss";
import classNames from "classnames/bind";
import DateRangePicker from "@/components/DateRangePicker";
import PageTitle from "@/components/PageTitle";
import SnapshotSummaryTable from "@/components/SnapshotSummaryTable";
import GeneralLayout from "@/components/GeneralLayout";
import LocationCombobox from "@/components/LocationCombobox";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Paragraph from "@/components/Paragraph";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

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
      <div className={cx("filter-sections")}>
        <div className={cx("filter-section")}>
          <Paragraph text="이슈타입" />
          <Separator className={cx("separator")} orientation="vertical" />
          <div className={cx("filter-group")}>
            {["전체", "공간변화", "화각변화", "비교불가", "이슈 없음"].map(
              (issueType) => (
                <div className={cx("filter-group-item")}>
                  <Checkbox defaultChecked={true} id={issueType} />
                  <Label htmlFor={issueType}>{issueType}</Label>
                </div>
              )
            )}
          </div>
        </div>
        <div className={cx("filter-section")}>
          <Paragraph text="메모타입" />
          <Separator className={cx("separator")} orientation="vertical" />
          <div className={cx("filter-group")}>
            {["전체", "location", "c/o"].map((memoType) => (
              <div className={cx("filter-group-item")}>
                <Checkbox defaultChecked={true} id={memoType} />
                <Label htmlFor={memoType}>{memoType}</Label>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("extract-button-wrapper")}>
          <Button>CSV로 추출</Button>
        </div>
      </div>
      <div className={cx("filter-sections")}>
        <div className={cx("snapshot-filter")}>
          <Label htmlFor="snapshot" className={cx("snapshot-filter-label")}>
            스냅샷 이미지 표시
          </Label>
          <Switch id="snapshot" defaultChecked />
        </div>
        <RadioGroup className={cx("sort-order-radio-group")}>
          <Paragraph text="정렬기준" />
          <Separator className={cx("separator")} orientation="vertical" />
          <div className={cx("radio-item")}>
            <RadioGroupItem value="최신 순" id="asc" />
            <Label htmlFor="asc">최신 순</Label>
          </div>
          <div className={cx("radio-item")}>
            <RadioGroupItem value="과거 순" id="desc" />
            <Label htmlFor="desc">과거 순</Label>
          </div>
        </RadioGroup>
      </div>
      <div className={cx("snapshot-summary-table-wrapper")}>
        <SnapshotSummaryTable />
      </div>
    </GeneralLayout>
  );
};

export default SnapshotSummaryPage;
