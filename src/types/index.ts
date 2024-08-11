export interface Asset {
  name: string;
  id: string;
  locationId: string | null;
  parentId: string | null;
  sensorType: "energy" | "vibration" | null;
  status: "operating" | "alert" | null;
  children: Asset[];
};

export interface Location {
  name: string;
  id: string;
  parentId: string | null;
  isLocation?: boolean;
  children: (Location | Asset)[];
};

export interface Unit {
  assets: Asset[];
  locations: Location[];
};

export interface TreeNode {
  name: string;
  id: string;
  parentId?: string | null;
  isLocation?: boolean;
  sensorType?: "energy" | "vibration" | null;
  status?: "operating" | "alert" | null;
  locationId?: string | null;
  children: (Location | Asset)[];
} 

export interface TreeView extends Array<TreeNode> {}