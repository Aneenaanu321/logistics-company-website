'use client'

import Papa from 'papaparse'

export interface CSVData {
  headers: string[]
  rows: (string | number)[][]
  filename?: string
}

export function exportToCSV(data: CSVData): void {
  if (typeof window === 'undefined') {
    console.error('exportToCSV can only be used in the browser')
    return
  }

  const csv = Papa.unparse({
    fields: data.headers,
    data: data.rows,
  })
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  
  link.setAttribute('href', url)
  link.setAttribute('download', data.filename || 'export.csv')
  link.style.visibility = 'hidden'
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

