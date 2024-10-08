export interface Item {
    id?: number;
    price: number;
    item: string;
    shop: string;
    date: string;
    comment: string;
    category: string;
}

export interface ItemListProps {
    items: Item[];
    title: string;
}

export interface UseFetchResult<T> {
    data: T | null;
    isPending: boolean;
    error: string | null;
}