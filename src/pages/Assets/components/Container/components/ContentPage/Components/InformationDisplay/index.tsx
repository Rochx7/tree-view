import EquipmentType from "./components/EquipmentType";
import SensorInfo from "./components/SensorInfo";
import "./styles.css";
import useFormattedData from "@/hooks";
import BoltIcon from "@/assets/Bolt";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { TreeNode } from "@/types";

const InformationDisplay = () => {
  const [currentComponent, setCurrentComponent] = useState<TreeNode>(null);

  const [searchParams] = useSearchParams();
  const component = searchParams.get("component") || "";
  const { formattedData, findComponent } = useFormattedData();

  useEffect(() => {
    if (formattedData.length) {
      const getComponent: TreeNode | undefined = findComponent(
        formattedData,
        component
      );
      if (getComponent) {
        setCurrentComponent(getComponent);
      }
    }
  }, [component, formattedData]);

  const renderCurrentIcon = useMemo(() => {
    if (currentComponent?.sensorType === "energy") {
      return <BoltIcon isEnergy={currentComponent?.status === "operating"} />;
    }
    if (currentComponent?.status) {
      return (
        <div
          className={`component-icon ${currentComponent?.status === "operating" ? "operating" : "alert"}`}
        />
      );
    }
    return null;
  }, [currentComponent]);

  return (
    <section className="info-display-content">
      {component ? (
        <>
          <div className="info-header">
            <h2>{currentComponent?.name || ""}</h2>
            {renderCurrentIcon}
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--gray-border-color)",
            }}
          />
          <div className="info-content">
            <EquipmentType component={currentComponent} />
            <SensorInfo />
          </div>
        </>
      ) : (
        <h2 style={{ padding: "24px" }}>Selecione um componente</h2>
      )}
    </section>
  );
};

export default InformationDisplay;
