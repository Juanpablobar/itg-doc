import React from 'react'
import { FileTree } from 'nextra/components'

const YourFirstComponentFileTree = () => {
  return (
    <FileTree>
      <FileTree.Folder name="src" defaultOpen>
        <FileTree.Folder name="components" defaultOpen>
          <FileTree.Folder name="Button" defaultOpen>
            <FileTree.File name="index.tsx" />
            <FileTree.File name="Button.tsx" />
          </FileTree.Folder>
          <FileTree.Folder name="Slider" defaultOpen>
            <FileTree.File name="index.tsx" />
            <FileTree.File name="Slider.tsx" />
            <FileTree.File name="useSlider.tsx" />
          </FileTree.Folder>
        </FileTree.Folder>
      </FileTree.Folder>
    </FileTree>
  )
}

export default YourFirstComponentFileTree
