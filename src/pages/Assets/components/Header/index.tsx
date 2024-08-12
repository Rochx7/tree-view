import React, { useEffect } from "react";
import "./styles.css";
import LogoTratian from "@/assets/logoTractian.svg";
import { useSearchParams } from "react-router-dom";
import { sanitize } from "@/utils/sanitize";
import Button from "@/components/Button";

const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const unit = searchParams.get("unit");

  useEffect(() => {
    if (!unit) {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set("unit", "jaguar-unit");
      setSearchParams(newSearchParams);
    }
  }, []);

  const handleSelect = (unitOption: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("unit", sanitize(unitOption));
    setSearchParams(newSearchParams);
  };

  return (
    <header className="main-header">
      <img src={LogoTratian} alt="Logo da Tractian" />
      <div className="buttons-container">
        <Button
          title="Apex Unit"
          isSelected={unit}
          onClick={() => handleSelect("Apex Unit")}
        />
        <Button
          title="Tobias Unit"
          isSelected={unit}
          onClick={() => handleSelect("Tobias Unit")}
        />
        <Button
          title="Jaguar Unit"
          isSelected={unit}
          onClick={() => handleSelect("Jaguar Unit")}
        />
      </div>
    </header>
  );
};

export default Header;
