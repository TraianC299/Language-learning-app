export type SelectOption = {
    value: string;
    label: string;
    image?: string;
};
export type SelectProps = {
    options: SelectOption[];
    value: string | number | null;
    setValue: (value: string) => void;
    noAddOption?: boolean;
    withImage?: boolean;
    label?: string;
};
