export interface RootState {
    user: any;
    cart: any;
    state?: any;
}
export interface ClickProps {
    _id: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;

}
