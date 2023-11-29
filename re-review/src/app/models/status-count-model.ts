export class StatusCountModel 
{
    delete: number;
    deleted: number;
    processd: number;
    totalStatus: number;
    verified: number;
    reprocess:number;
    constructor() 
    {
        this.delete = 0;
        this.deleted = 0;
        this.processd = 0;
        this.totalStatus = 0;
        this.verified = 0;
        this.reprocess=0;
    }
}
