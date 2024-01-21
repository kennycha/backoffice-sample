import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DUMMY_SNAPSHOT_SUMMARY_DATA } from "@/lib/constants";
import { SnapshotSummaryDatum } from "@/types/snapshot";
import { ReactNode } from "react";
import { ColumnKeyTypes } from "./types";
import ImageCellInner from "./ImageCellInner";
import TextCellInner from "./TextCellInner";
import MemoCellInner from "./MemoCellInner";
import IssuesCellInner from "./IssuesCellInner";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

const DUMMY_LOCATION_NAME = "메이아이 VS선릉";

const COLUMNS: { key: ColumnKeyTypes; label: string }[] = [
  {
    key: "location",
    label: "Location",
  },
  {
    key: "prevSnapshot",
    label: "전일 스냅샷",
  },
  {
    key: "currentSnapshot",
    label: "당일 스냅샷",
  },
  {
    key: "date",
    label: "날짜",
  },
  {
    key: "cameraOrientationId",
    label: "C/O",
  },
  {
    key: "issues",
    label: "이슈타입",
  },
  {
    key: "memo",
    label: "메모",
  },
];

const renderMap: {
  [key in ColumnKeyTypes]: (datum: SnapshotSummaryDatum) => ReactNode;
} = {
  location: () => <TextCellInner text={DUMMY_LOCATION_NAME} />,
  prevSnapshot: (datum) => {
    if (!datum.prevSnapshot) return "";

    const { imageUrl, configImageUrl } = datum.prevSnapshot;
    return imageUrl && configImageUrl ? <ImageCellInner imageUrl={imageUrl} configImageUrl={configImageUrl} /> : "";
  },
  currentSnapshot: (datum) => {
    if (!datum.currentSnapshot) return "";

    const { imageUrl, configImageUrl } = datum.currentSnapshot;
    return imageUrl && configImageUrl ? <ImageCellInner imageUrl={imageUrl} configImageUrl={configImageUrl} /> : "";
  },
  date: (datum) => <TextCellInner text={datum.date} />,
  cameraOrientationId: (datum) => <TextCellInner text={datum.cameraOrientationId ?? ""} />,
  issues: (datum) => <IssuesCellInner issues={datum.issues} />,
  memo: (datum) => (datum.memo ? <MemoCellInner memo={datum.memo} /> : ""),
};

const cx = classNames.bind(styles);

const SnapshotSummaryTable = () => {
  const snapshotSummaryData = DUMMY_SNAPSHOT_SUMMARY_DATA;

  return (
    <Table className={cx("container")}>
      <TableCaption className={cx("caption")}>{DUMMY_LOCATION_NAME}</TableCaption>
      <TableHeader>
        <TableRow>
          {COLUMNS.map((column) => (
            <TableHead key={column.key}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {snapshotSummaryData.map((snapshotSummaryDatum, idx) => (
          <TableRow key={idx}>
            {COLUMNS.map((column) => (
              <TableCell key={column.key}>{renderMap[column.key](snapshotSummaryDatum)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className={cx("total-count-label")} colSpan={2}>
            데이터 총 개수
          </TableCell>
          <TableCell className={cx("total-count")} colSpan={6}>
            {snapshotSummaryData.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default SnapshotSummaryTable;
