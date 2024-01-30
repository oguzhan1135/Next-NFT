"use client"
import Seller from "@/Components/Seller/page";
import { NftProductContext } from "@/Context/NftCardContext"
const TopSellerGrid = () => {
    const { topSeller } = NftProductContext();
    return (
        <>
            {
                topSeller.map((card) =>
                    <Seller data={card} key={card.id} />
                )
            }
        </>
    )
}
export default TopSellerGrid