export interface GuideType {
    title : string
    startAt : Date
    endAt : Date
    limitPeople : number
    price : number
    description : string
    wifi : boolean
    tv : boolean
    kitchen : boolean
    washingMachine : boolean
    airConditioner : boolean
    parking : boolean
    bedCnt : number
    bathroomCnt : number
    roomCnt : number
    address : string
    guideKind : any
    places : {latitude :String , longitude :String , name :String , seq :String }[]
    files : {path : string}
    userId : string
}