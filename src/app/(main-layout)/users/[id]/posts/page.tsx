import {FC, PropsWithChildren} from "react";
import {postService} from "@/services/postService";
import {Posts} from "@/app/(main-layout)/users/[id]/posts/components/Posts";

interface IProps extends PropsWithChildren {
    params: { id: string }
}

const Page: FC<IProps> = async ({params: {id}}) => {
    const {data} = await postService.getByUserId(id);

    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default Page;