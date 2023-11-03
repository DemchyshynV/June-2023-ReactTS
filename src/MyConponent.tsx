import {FC, PropsWithChildren, ReactNode} from "react";

interface IProps extends PropsWithChildren {
}

const MyConponent: FC<IProps> = () => {
    return (
        <div>
            MyConponent
        </div>
    );
};

export {MyConponent};