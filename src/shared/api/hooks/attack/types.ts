export interface Attack {
    cidrip: string;
    cidrmask: number;
    endtime: string;
    id: string;
    starttime: string;
    user: string;
  }
  
  export interface AttacksInfo {
    attack: Attack[];
    count: number;
  }
  
  export interface CreateAttack {
    cidrip: string;
    cidrmask: number;
    pswd: string;
    user: string;
  }
  
  export interface ServiceStatus {
    attack_id: string;
    info_id?: string;
    message: string;
    service: string;
    status: string;
  }
  