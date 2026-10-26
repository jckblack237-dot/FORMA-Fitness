export type Meal={id:string;name:string;calories:number;protein:number;date:string};
export type Session={id:string;name:string;minutes:number;date:string};
export type CheckIn={id:string;weight:number;date:string};
export type State={meals:Meal[];sessions:Session[];checkins:CheckIn[];recoveryNote:string;recoveryStatus:'restricted'|'awaiting-clearance'};
export const initial:State={meals:[],sessions:[],checkins:[],recoveryNote:'',recoveryStatus:'restricted'};
export const today=()=>new Date().toLocaleDateString('en-CA');
export const uid=()=>crypto.randomUUID();
