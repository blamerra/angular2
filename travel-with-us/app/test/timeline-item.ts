/*
export enum TimelineItemType {
    photo =1 ,
    movie = 2,
    location = 3
}
*/

export interface TimelineItem {
    title?: string;
    description?: string;   
    buttonLabel? : string;
    //type?: TimelineItemType;    
    type?: string;    //Enums loaded from external files return an error used "photo", "movie", "location"
    url?: string;
    routerLink?: any;
    date?: Date;
    dateLabel?: string;
    expanded?: boolean;
    disabled?: boolean;
    order?: number;
}