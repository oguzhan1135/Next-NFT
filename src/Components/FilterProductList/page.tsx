"use client"
import { NftProductContext } from '@/Context/NftCardContext'
import { useEffect, useState } from "react"
import NftCard from '../Cards/NftCard/page';
interface Nft {
    id: number;
    createrName: string;
    createrAvatar: string;
    like: number;
    nftImage: string;
    cardName: string;
    price: number;
    currentBid: string;
    currency: string;
    file: string;
    stock: number;
    sellCategory: string;
    category: string[];
    targetDate: string;
    view: number;
}
interface CardDataProps{
    filterTab:string;
    setFilterTab:React.Dispatch<React.SetStateAction<string>>
}

const FilterProductList:React.FC<CardDataProps> = ({filterTab,setFilterTab}) => {
    const { nftProducts } = NftProductContext();
    const [product, setProduct] = useState<Nft[]>(nftProducts);
    useEffect(() => {
        let filterproducts = nftProducts
        if (filterTab !== "All") {
            setProduct(filterproducts.filter((product) => product.category.includes(filterTab)))
        } else {
            setProduct(nftProducts)
        }
    }, [filterTab])
    return (
        <>
            {product.map((nftData) => (
                <NftCard key={nftData.id} nftCardData={nftData} isListView={false} />
            ))}
        </>
    )
}
export default FilterProductList