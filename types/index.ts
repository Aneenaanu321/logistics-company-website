export interface TrackingData {
  trackingNumber: string
  status: 'pending' | 'in-transit' | 'out-for-delivery' | 'delivered' | 'exception'
  currentLocation?: string
  estimatedDelivery?: string
  history: TrackingEvent[]
}

export interface TrackingEvent {
  date: string
  time: string
  location: string
  status: string
  description: string
}

export interface QuoteRequest {
  origin: string
  destination: string
  weight: number
  dimensions: {
    length: number
    width: number
    height: number
  }
  serviceType: 'standard' | 'express' | 'overnight'
  insurance?: boolean
}

export interface QuoteResponse {
  quoteId: string
  price: number
  currency: string
  estimatedDelivery: string
  serviceType: string
}

