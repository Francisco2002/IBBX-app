import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Graphic, Header } from './styles';

type SkeletonProps = {
    withGraphic?: boolean;
}

const SkeletonList: React.FC<SkeletonProps> = ({ withGraphic }) => {

    return (
        <SkeletonTheme baseColor="#CECECE" highlightColor="#DEDEDE">
            <Header>
                <Skeleton height={50} width="30%" />
            </Header>

            {
                withGraphic && (
                    <Graphic>
                        <Skeleton height={450} />
                    </Graphic>
                )
            }

            <Skeleton count={10} height={150} style={{ marginBottom: 10 }} />
        </SkeletonTheme>
    );
}

export default SkeletonList;