import { LoadMoreBtnProps } from "../App/App.types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <div className={css.loadBoxBtn}>
      <button className={css.loadBtn} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
