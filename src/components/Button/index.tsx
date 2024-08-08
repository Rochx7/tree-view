import "./style.css"
import Gold from "../../assets/Gold.svg"
import Thunder from "../../assets/Thunderbolt.svg"
import Alert from "../../assets/Alert.svg"

interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  icon?: "gold" | "thunder" | "alert"
  isSelected?:string
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

  const selected = title === isSelected
  
  return (
    <button className={`button-select ${hashVariant[variant]} ${selected && "is-selected"}`} {...props} onClick={onClick}>
      <img src={hashIcon[icon]} alt="Logo da Tractian" /> {title}
    </button>
  )
}

export default Button;