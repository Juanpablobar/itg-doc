'use client'

import React from 'react'

export function ExpoSnackEmbed({ snackId }: { snackId: string }) {
  return (
    <>
      <div
        data-snack-id={`@jhonperezitg101/${snackId}`}
        data-snack-platform="web"
        data-snack-preview="true"
        data-snack-theme="light"
        style={{
          overflow: 'hidden',
          background: '#fbfcfd',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          height: '505px',
          width: '100%',
        }}
      />
      <script async src="https://snack.expo.dev/embed.js" />
    </>
  )
}
