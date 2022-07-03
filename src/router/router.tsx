import {useRoutes} from 'react-router-dom'
import NftRanking from "../views/nft/NftRanking";
import FtRanking from "../views/ft/FtRanking";

function Router() {
    return useRoutes([
        {
            path: '/nftRanking',
            element: NftRanking()
        },
        {
            path: '/ftRanking',
            element: <FtRanking/>
        }
    ])

}

export default Router
