import { ReactElement } from "react";

export interface pageActionHead {title:string,description:string,actionText:string,action: ()=>void};
export interface tableProps {rows:any[],columns:any[]};
export interface statsCard {title:string,link:string,count:number,icon:ReactElement};

