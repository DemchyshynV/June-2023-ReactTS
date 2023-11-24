'use client'
import {FC, PropsWithChildren, useState} from "react";
import {IPost} from "@/interfaces/postInterface";

interface IProps extends PropsWithChildren {
    post: IPost
}

const Post: FC<IProps> = ({post: {id, userId, title, body}}) => {
    const [asd, setAsd] = useState()
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};