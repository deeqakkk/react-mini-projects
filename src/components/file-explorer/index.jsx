import { useState } from 'react'
import explorer from './data/data'
import Folder from './Folder'
import useTraverseTree from './useTraverseTree'
const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer)
  const { insertNode } = useTraverseTree()

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder)
    setExplorerData(finalTree)
  }

  return <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
}

export default FileExplorer
