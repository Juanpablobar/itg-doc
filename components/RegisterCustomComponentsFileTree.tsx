import React from 'react'
import { FileTree } from 'nextra/components'

const RegisterCustomComponentsFileTree = () => {
  return (
    <FileTree>
      <FileTree.Folder name="src" defaultOpen>
        <FileTree.Folder name="components" defaultOpen>
          <FileTree.Folder name="Button">
            <FileTree.File name="index.tsx" />
            <FileTree.File name="Button.tsx" />
          </FileTree.Folder>
          <FileTree.Folder name="Slider">
            <FileTree.File name="index.tsx" />
            <FileTree.File name="Slider.tsx" />
            <FileTree.File name="useSlider.tsx" />
          </FileTree.Folder>
          <FileTree.File name="index.tsx" />
        </FileTree.Folder>
      </FileTree.Folder>
    </FileTree>
  )
}

export default RegisterCustomComponentsFileTree
