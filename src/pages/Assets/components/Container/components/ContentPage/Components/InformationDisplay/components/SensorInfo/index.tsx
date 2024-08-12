import Receptor from "@/assets/Receptor.svg";
import Sensor from "@/assets/Sensor.svg";

const SensorInfo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "var(--gray-border-color)",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <h4>Sensor</h4>
          <div style={{ display: "flex" }}>
            <img src={Sensor} />
            <h4 style={{ color: "var(--gray-text-color)", fontWeight: 400 }}>
              HIO4510
            </h4>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <h4>Receptor</h4>
          <div style={{ display: "flex", gap: "8px" }}>
            <img src={Receptor} />
            <h4 style={{ color: "var(--gray-text-color)", fontWeight: 400 }}>
              EUH4R27
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorInfo;
