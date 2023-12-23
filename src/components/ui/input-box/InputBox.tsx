import { forwardRef } from "react";
import Icon from "../Icon";
import { IInputBox } from "./inputBox.interface";
import styles from "./inputBox.module.scss";

const InputBox = forwardRef<HTMLInputElement, IInputBox>(
  ({ error, type = "text", ...rest }, ref) => {
    return (
      <div className={styles.inputBox}>
        <input type={type} ref={ref} {...rest} />

        {type === "password" && (
          <button className="absolute flex items-center justify-center w-12 h-[calc(100%-4px)] rounded-r-lg bg-white right-0 top-0">
            <Icon name={"eye"} />
          </button>
        )}
        {error && <div className="text-sm text-[red]">{error.message}</div>}
      </div>
    );
  }
);
InputBox.displayName = "InputBox";

export default InputBox;
