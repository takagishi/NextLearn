import { css } from "@emotion/react";
import { ReactNode } from "react";

const variants = {
  primary: {
    color: "#ffffff",
    backgroundColor: "#1D3461",
    border: "none",
  },
  success: {
    color: "#ffffff",
    backgroundColor: "#5ab203",
    border: "none",
  },
  transparent: {
    color: "#111111",
    backgroundColor: "transparent",
    border: "1px solid black",
  },
} as const;

type StyledButtonProps = {
  variant: keyof typeof variants;
  onClick: () => void;
  children: ReactNode;
};
const buttonBaseStyle = css({
  borderRadius: "12px",
  fontSize: "14px",
  height: "38px",
  lineHeight: "22px",
  letterSpacing: "0",
  cursor: "pointer",
  "&:focus": {
    outline: "none",
  },
});
const StyledButton = (props: StyledButtonProps) => {
  const { variant, onClick, children } = props;
  const style = variants[variant];
  const buttonVariantStyle = css({
    color: style.color,
    backgroundColor: style.backgroundColor,
    border: style.border,
  });
  return (
    <button
      type="button"
      onClick={onClick}
      css={[buttonBaseStyle, buttonVariantStyle]}
    >
      {children}
    </button>
  );
};

export default StyledButton;
