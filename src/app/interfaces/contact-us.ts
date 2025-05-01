export interface ContactUs {
  
name: string,
email: string,
phone: string,
message: string

}

export type lead =cont[]

export interface cont {
  id: number
  name: any
  email: string
  phone: string
  message: string
  employeeName: any
  isDone: boolean
}

export type emp = emprole[]

export interface emprole {
  id: string
  firstName: string
  lastName: string
  email: string
  isDisabled: boolean
  roles: string[]
}
 