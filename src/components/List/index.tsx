import React from "react";
import { BackButton, EmptyList, ListAddButton, ListBlock, ListBody, ListButton, ListContent, ListData, ListHeader, ListId, ListItem, ListSection, ListTitle } from "./styles";
import moment from "moment";
import Filters from "../Filters";
import Graphic from "../Graphic";
import { AiOutlineDelete, AiFillCaretRight, AiOutlinePlus, AiFillCaretLeft } from "react-icons/ai";
import { theme } from "../../theme";
import SkeletonList from "../Skeleton";
import Lottie from "lottie-react";
import emptyAnimation from "../../assets/animations/emptyAnimation.json";

type ListProps = {
    title: string;
    shape: Shape;
    data: any[];
    filters?: Filter[];
    actions: ListActions;
    withGraphics?: {
        title: string;
    };
    loading: boolean;
}

const List: React.FC<ListProps> = ({ title, data, filters, actions, withGraphics, shape, loading }) => {
    function clickItem(item: any) {
        if(actions.click)
            actions.click(item);
    }

    function columnFormat(item: any, col: Column) {
        switch(col.type) {
            case "date":
                return moment(item[col.name], "YYYY-MM-DD").format("DD/MM/YYYY");
            default:
                return item[col.name]
        }
    }

    return loading ? <SkeletonList /> : (
        <ListContent>
            <ListHeader>
                <ListBlock>
                    {
                        actions.back && (
                            <BackButton onClick={actions.back}>
                                <AiFillCaretLeft />
                            </BackButton>
                        )
                    }
                    <ListTitle variant="title">{title}</ListTitle>
                </ListBlock>
                
                <ListBlock>
                    { filters && <Filters filters={filters} /> }

                    <ListAddButton onClick={actions.create}>
                        <AiOutlinePlus />
                    </ListAddButton>
                </ListBlock>
            </ListHeader>

            {
                data.length > 0 && withGraphics && <Graphic data={data} title={withGraphics.title} />
            }

            <ListBody>
                {data.length > 0 ? data.map((item) => (
                    <ListItem key={item[shape.identifier.name]}>
                        <ListSection>
                            <ListId>{columnFormat(item, shape.identifier)}</ListId>
                            {
                                shape.columns.map((column, index) => <ListData key={index.toString()}>{columnFormat(item, column)}</ListData>)
                            }
                        </ListSection>
                        
                        <ListSection>
                            {
                                actions.click && (
                                    <ListButton color={theme.colors.grayVariant} onClick={() => clickItem(item)}>
                                        <AiFillCaretRight />
                                    </ListButton>
                                )
                            }
                            <ListButton color={theme.colors.danger} onClick={() => actions.delete(item)}>
                                <AiOutlineDelete color="#fff" />
                            </ListButton>
                        </ListSection>
                    </ListItem>
                )) : (
                    <EmptyList>
                        <Lottie style={{ height: "50vh" }} animationData={emptyAnimation} loop={true} />
                    </EmptyList>
                )}
            </ListBody>
        </ListContent>
    )
}

export default List;