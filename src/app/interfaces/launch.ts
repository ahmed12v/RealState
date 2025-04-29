export interface lunch{
    id: number
    name: string
    location: string
    bannerImages: any[]
    masterPlanImages: any[]
    locationImages: any[]
    paymentPlanImages: any[]
    properties: Property[]
  }
  
  export interface Property {
    id: number
    title: string
    description: string
    propertyType: number
    price: number
    location: string
    dateListed: string
    numberOfRooms: number
    condition: number
    images: string[]
    isAvailable: boolean
    launchId: number
    contactNumber: string
  }
