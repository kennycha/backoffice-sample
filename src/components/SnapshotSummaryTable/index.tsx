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
import { DUMMY_SNAPSHOT_SUMMARY_DATA } from "./dummy";
import { SnapshotSummaryDatum } from "@/types/snapshot";
import { ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";

type ColumnKeyTypes =
  | "location"
  | "prevSnapshot"
  | "currentSnapshot"
  | "date"
  | "cameraOrientationId"
  | "issues"
  | "memo";

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
  location: () => "location",
  prevSnapshot: () => "prevSnapshot",
  currentSnapshot: () => "currentSnapshot",
  date: () => "date",
  cameraOrientationId: () => "cameraOrientationId",
  issues: () => "issues",
  memo: () => "memo",
};

const cx = classNames.bind(styles);

const SnapshotSummaryTable = () => {
  const snapshotSummaryData = DUMMY_SNAPSHOT_SUMMARY_DATA;

  return (
    <Table className={cx("container")}>
      <TableCaption className={cx("caption")}>
        스냅샷 이슈/메모 종합 테이블
      </TableCaption>
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
              <TableCell key={column.key}>
                {renderMap[column.key](snapshotSummaryDatum)}
              </TableCell>
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
