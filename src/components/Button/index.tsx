import "./style.css"
import { sanitize } from "../../utils/sanitize";
import AlertIcon from "../../assets/Alert";
import GoldIcon from "../../assets/Gold";
import ThunderIcon from "../../assets/Thunder";

interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  icon?: "gold" | "thunder" | "alert"
  isSelected?: string | null
  onClick?: () => void
  props?:any
}

const Button = ({title, variant="contained",icon="gold",isSelected, onClick,props}:ButtonProps) => {
  const selected = sanitize(title) === isSelected

  const hashVariant = {
    outlined: "button-outlined",
    contained: "button-contained",
  }

  const hashIcon = { 
    "gold": ()=> <GoldIcon/>,
    "thunder": ()=> <ThunderIcon isSelected={selected}/>,
    "alert": ()=> <AlertIcon isSelected={selected}/>
  }

  return (
    <button className={`button-select ${hashVariant[variant]} ${selected && "is-selected"}`} {...props} onClick={onClick}>
      {hashIcon[icon]()} {title}
    </button>
  )
}

export default Button;