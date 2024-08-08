
import { useState } from 'react'
import { assets, locations } from '../../../../../../mocks'
import TreeNode from '../TreeNode'
import "./styles.css"
import Search from "../../../../../../assets/Search.svg"

const TreeView = () => {

  const formatArray = (arr)=> {
    let format = {}
    const result = []
    
    arr.forEach((item) => {
    format[item.id] = {...item, children:[] }
    })
    
    arr.forEach((item)=>{
      if(item.parentId){
        const parent = format[item.parentId] 
        
        if(parent){
          parent.children.push(format[item.id])
        }
      return
      }
        result.push(format[item.id])
    })
  return result
}

const addAssetsToLocation = (location, assets) => {
  assets.forEach((asset) => {
    if (asset.locationId === location.id) {
      location.children.push(asset);
    }
  });

  location.children.forEach((child) => {
    addAssetsToLocation(child, assets);
  });
};

const formatConcat = () => {
  const assetsFormatado = formatArray(assets);
  const locationFormatado = formatArray(locations);

  const hashLocation = {};
  locationFormatado.forEach((location) => {
    hashLocation[location.id] = location;
  });

  const rootLocations = formatArray(locations);

  rootLocations.forEach((location) => {
    addAssetsToLocation(location, assetsFormatado);
  });

  return rootLocations;
};


function filterBy(arr, query){
 const filterRecursive = (nodes) => {
    return nodes
      .map(node => ({
        ...node,
        children: node.children ? filterRecursive(node.children) : []
      }))
      .filter(node => 
        node.name?.toLowerCase().includes(query.toLowerCase()) || 
        (node.children && node.children.length > 0)
      );
  };

  return query ? filterRecursive(arr) : arr;
}

const [treeData, setTreeData] = useState(formatConcat())

const onQueryChange = (e) => {
  e.preventDefault()
  setTreeData(filterBy(formatConcat(), e.target.value))
}

  return (
    <div className='tree-view-content'>
      <div className="tree-view-input">
        <input placeholder="Buscar Ativo ou Local" onChange={onQueryChange}/>
        <img src={Search} alt="Search" />
      </div>
      <div className='tree-view'>
          {treeData.map((node) => (
            <TreeNode key={node.id} node={node} />
          ))}
      </div>
    </div>
  )
}

export default TreeView;