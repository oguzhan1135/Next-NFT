import NftCard from "../../Cards/NftCard/page";

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

interface ProductProp {
    data: Nft[];
    isListView:boolean
}

const ProductList: React.FC<ProductProp> = ({ data,isListView }) => {
    return (
        <>
            {data.map((nftData) => (
                <NftCard key={nftData.id} nftCardData={nftData} isListView={isListView} />
            ))}
        </>
    )
}
export default ProductList