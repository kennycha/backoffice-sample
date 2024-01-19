import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import Navigation from "../Navigation";

const cx = classNames.bind(styles);

const GeneralLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cx("container")}>
      <header className={cx("navigation-wrapper")}>
        <Navigation />
      </header>
      <main className={cx("content-wrapper")}>{children}</main>
    </div>
  );
};

export default GeneralLayout;
