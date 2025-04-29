export interface SendFelter {
    propertyType: string
    numberOfRooms: number
    location: string
}



export type filter= get[]

export interface get {
  id: number
  title: string
  description: string
  price: number
  location: string
  images: string[]
  contactNumber: string
  numberOfRooms: number
}


export type launch = getlanche[]

export interface getlanche {
  id: number
  name: string
  location: string
  bannerImages: string[]
  masterPlanImages: string[]
  locationImages: string[]
  paymentPlanImages: string[]
  
}

export interface Root {
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

