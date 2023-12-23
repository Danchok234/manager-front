import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputBoxProps {
  error?: FieldError;
}

type TInputBoxProps = InputHTMLAttributes<HTMLInputElement> & IInputBoxProps;

export interface IInputBox extends TInputBoxProps {}
