import Motor1 from "@/assets/img1.png";
import Motor2 from "@/assets/img2.png";
import Inbox from "@/assets/Inbox.svg";
import "./styles.css";
import { useCallback } from "react";
import { TreeNode } from "@/types";

const EquipmentType = ({ component }: { component: TreeNode }) => {
  const isAlert = component?.status === "alert";
  const sensorType = component?.sensorType;

  const displayCurrentImage = useCallback(() => {
    const hashImg = {
      vibration: Motor1,
      energy: Motor2,
    };

    if (isAlert || !sensorType) {
      return (
        <div className="container-svg">
          <img src={Inbox} className="inbox" />
          <h4 className="inbox-title">Adicionar imagem do Ativo</h4>
        </div>
      );
    }

    return (
      <div className="container-img">
        <img src={hashImg[sensorType]} className="motor-img" />
      </div>
    );
  }, [component]);

  return (
    <div className="container-equipment-type">
      {displayCurrentImage()}
      <div className="content-info">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h4>Tipo de equipamento</h4>
          <h4 style={{ color: "var(--gray-text-color)", fontWeight: 400 }}>
            Motor Elétrico (Trifásico)
          </h4>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--gray-border-color)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <h4>Responsaveis</h4>
          <h4 style={{ color: "var(--gray-text-color)", fontWeight: 400 }}>
            <span>E</span> Elétrica
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EquipmentType;
