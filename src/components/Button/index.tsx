import "./style.css"
import Gold from "../../assets/Gold.svg"
import Thunder from "../../assets/Thunderbolt.svg"
import Alert from "../../assets/Alert.svg"
import { sanitize } from "../../utils/sanitize";

interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  icon?: "gold" | "thunder" | "alert"
  isSelected?: string | null
  onClick?: () => void
  props?:any
}

const Button = ({title, variant="contained",icon="gold",isSelected, onClick,props}:ButtonProps) => {

  const hashVariant = {
    outlined: "button-outlined",
    contained: "button-contained",
  }

  const hashIcon = { 
    "gold":Gold,
    "thunder": Thunder,
    "alert": Alert
  }

  const selected = sanitize(title) === isSelected
  
  return (
    <button className={`button-select ${hashVariant[variant]} ${selected && "is-selected"}`} {...props} onClick={onClick}>
      <img src={hashIcon[icon]} alt="Logo da Tractian" /> {title}
    </button>
  )
}

export default Button;