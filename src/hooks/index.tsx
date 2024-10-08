import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { apexUnit, jaguarUnit, tobiasUnit } from "../mocks";
import { Asset, Location, TreeNode, TreeView } from "../types";

const useFormattedData = () => {
  const [formattedData, setFormattedData] = useState<TreeView | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const unit = searchParams.get("unit") || "tobias-unit";

  const hashUnit = {
    "apex-unit": apexUnit,
    "jaguar-unit": jaguarUnit,
    "tobias-unit": tobiasUnit,
  };

  const formatHierarchy = (
    arr: Array<Location | Asset>
  ): (Location | Asset)[] => {
    const format: { [key: string]: Location | Asset } = {};
    const result: (Location | Asset)[] = [];

    arr.forEach((item) => {
      format[item.id] = { ...item, children: [] };
    });

    arr.forEach((item) => {
      if (item.parentId) {
        const parent = format[item.parentId];
        if (parent) {
          parent.children.push(format[item.id]);
        }
        return;
      }
      result.push(format[item.id]);
    });

    return result;
  };

  const addAssetsToLocation = (location: Location, assets: Asset[]) => {
    if (!location.hasOwnProperty("sensorType")) {
      location.isLocation = true;
    }
    assets.forEach((asset) => {
      if (asset.locationId === location.id) {
        location.children.push(asset);
      }
    });

    location.children.forEach((child) => {
      addAssetsToLocation(child, assets);
    });
  };

  const formatData = () => {
    setIsLoading(true);
    const assetsFormatado = formatHierarchy(hashUnit[unit].assets);
    const locationFormatado = formatHierarchy(hashUnit[unit].locations);
    const hashLocation = {};

    locationFormatado.forEach((location) => {
      hashLocation[location.id] = location;
    });

    const rootLocations = formatHierarchy(hashUnit[unit].locations);

    assetsFormatado.forEach((asset) => {
      if (!asset.locationId) {
        rootLocations.push(asset);
      }
    });

    rootLocations.forEach((location) => {
      addAssetsToLocation(location, assetsFormatado);
    });

    setFormattedData(rootLocations);
    setIsLoading(false);
  };

  useEffect(() => {
    formatData();
  }, [unit]);

  const findComponent = (
    data: TreeView,
    component: string
  ): TreeNode | undefined => {
    if (!component) return;
    for (const node of data) {
      if (node.id === component) {
        return node;
      }
      const found = findComponent(node.children, component);
      if (found) {
        return found;
      }
    }
    return undefined;
  };

  return { formattedData, isLoading, findComponent };
};

export default useFormattedData;
