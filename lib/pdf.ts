'use client'

import jsPDF from 'jspdf'

export interface PDFData {
  title: string
  content: string
  trackingNumber?: string
  companyName?: string
}

export function generatePDF(data: PDFData): void {
  if (typeof window === 'undefined') {
    console.error('generatePDF can only be used in the browser')
    return
  }

  const doc = new jsPDF()
  
  // Add title
  doc.setFontSize(20)
  doc.text(data.title, 20, 20)
  
  // Add company name if provided
  if (data.companyName) {
    doc.setFontSize(12)
    doc.text(data.companyName, 20, 30)
  }
  
  // Add tracking number if provided
  if (data.trackingNumber) {
    doc.setFontSize(10)
    doc.text(`Tracking Number: ${data.trackingNumber}`, 20, 40)
  }
  
  // Add content
  doc.setFontSize(12)
  const lines = doc.splitTextToSize(data.content, 170)
  doc.text(lines, 20, 50)
  
  // Save the PDF
  doc.save(`${data.title.replace(/\s+/g, '_')}.pdf`)
}

