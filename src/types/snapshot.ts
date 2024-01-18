import { User } from "./auth";

export type SnapshotIssueTypes =
  | "changedSpace"
  | "changedOrientation"
  | "incompatible";

export type SnapshotMemoTypes = "location" | "cameraOrientation";

export type SnapshotMemo = {
  uid: string;
  type: SnapshotMemoTypes;
  date: string;
  content: string;
  author: User;
};

export type SnapshotDatum = {
  cameraOrientationId: string;
  cameraOrientationUid: string;
  timestamp: string;
  imageUrl?: string;
  configImageUrl?: string;
};

export type SnapshotSummaryDatum = {
  date: string;
  cameraOrientationId?: string;
  prevSnapshot?: SnapshotDatum;
  currentSnapshot?: SnapshotDatum;
  issues: SnapshotIssueTypes[];
  memo?: Pick<SnapshotMemo, "type" | "content">;
};
