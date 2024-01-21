import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  imageUrl: string;
  configImageUrl: string;
};

const ImageCellInner = ({ imageUrl, configImageUrl }: Props) => {
  return (
    <div className={cx("container")}>
      <img className={cx("config")} src={configImageUrl} alt="config" />
      <img className={cx("snapshot")} src={imageUrl} alt="snapshot" />
    </div>
  );
};

export default ImageCellInner;
