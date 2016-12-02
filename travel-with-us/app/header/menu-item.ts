export interface MenuItem {
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    routerLink?: any;
    items?: MenuItem[];
    expanded?: boolean;
    disabled?: boolean;
    order?: number;
}