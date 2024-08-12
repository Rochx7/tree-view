import { lazy, memo, Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "@/assets/Search.svg";
import useFormattedData from "@/hooks";
import { TreeNode, TreeView, Unit } from "@/types";
import "./styles.css";
import { debounce } from "@/utils";

const TreeNode = lazy(() => import("./components/TreeNode"));

const TreeView = memo(() => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";
  const { formattedData, isLoading } = useFormattedData();
  const [treeData, setTreeData] = useState(formattedData);

  const filterBy = (data: TreeNode, query = "") => {
    const filterRecursive = (nodes: TreeNode) => {
      return nodes
        .map((node: { children: TreeNode }) => ({
          ...node,
          children: node.children ? filterRecursive(node.children) : [],
        }))
        .filter((node: TreeNode) => {
          const key = filter === "energy" ? "sensorType" : "status";
          const matchesQuery = query
            ? node.name.toLowerCase().includes(query.toLowerCase())
            : true;
          const matchesFilter = Object.keys(filter).length
            ? node[key]?.toLowerCase() === filter.toLowerCase()
            : true;

          const hasVisibleChildren = node.children && node.children.length > 0;
          return (
            (matchesQuery || hasVisibleChildren) &&
            (matchesFilter || hasVisibleChildren)
          );
        });
    };
    return filterRecursive(data);
  };

  useEffect(() => {
    if (filter) {
      return setTreeData(filterBy(formattedData, ""));
    }
    setTreeData(formattedData);
  }, [formattedData]);

  useEffect(() => {
    setTreeData(filterBy(formattedData, ""));
  }, [filter]);

  const handleInputChange = useCallback(
    debounce((value: string) => {
      setTreeData(filterBy(formattedData, value));
    }, 700),
    [formattedData, filter]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.value);
  };

  return (
    <div className="tree-view-content">
      <div className="tree-view-input">
        <input
          placeholder="Buscar Ativo ou Local"
          onChange={onChange}
          disabled={isLoading}
        />
        <img src={Search} alt="Search" />
      </div>
      <div className="tree-view">
        <Suspense fallback={"Carregando..."}>
          {treeData.length > 0 ? (
            treeData.map((node) => <TreeNode key={node.id} node={node} />)
          ) : (
            <p>{isLoading ? "Carregando..." : "Nenhum item encontrado"}</p>
          )}
        </Suspense>
      </div>
    </div>
  );
});

export default TreeView;
