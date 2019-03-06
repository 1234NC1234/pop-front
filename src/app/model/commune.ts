export interface Commune {
  nom:String
  population:Number
  inseeCode:String
  departementCode:String
}

export interface CommuneResponse {
  communeList:Commune[],
  lastIndex:Number
}
