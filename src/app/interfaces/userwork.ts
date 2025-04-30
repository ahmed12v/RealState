export type User = work[]

export interface work {
  id: string
  firstName: string
  lastName: string
  email: string
  isDisabled: boolean
  roles: string[]
}

export interface Addrole{
  userId: string
  roleName: string
}
