interface Props {
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const Button = ({ color = "primary", onClick }: Props) => {
  return (
    <div className={"btn alert-dismissible btn-" + color} onClick={onClick}>
      Button
    </div>
  );
};

export default Button;
