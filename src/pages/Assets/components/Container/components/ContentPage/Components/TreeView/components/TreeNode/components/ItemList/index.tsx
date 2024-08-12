import AssetIcon from "@/assets/Asset.svg";
import LocationIcon from "@/assets/Location.svg";
import { Asset } from "@/types";
import "./style.css";
type IconKeys = "asset" | "location";

interface ItemListProps {
  node: Asset;
  nodeIcon: IconKeys;
}

const ItemList: React.FC<ItemListProps> = ({ node, nodeIcon }) => {
  const hashIcon: Record<IconKeys, string> = {
    asset: AssetIcon,
    location: LocationIcon,
  };
  return (
    <div className="item-node">
      <img src={hashIcon[nodeIcon]} alt={`Logo ${nodeIcon}`} />
      <p>{node.name}</p>
    </div>
  );
};
export default ItemList;
