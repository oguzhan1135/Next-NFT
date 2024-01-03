'use client'
import { createContext, useContext, ReactNode, useState,useEffect, use } from 'react';

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

interface NftContextProps {
    nftProducts: Nft[];
    setNftProducts: React.Dispatch<React.SetStateAction<Nft[]>>;
    itemData: Nft | null;  
    setItemData: React.Dispatch<React.SetStateAction<Nft | null>>;
}

const NftContext = createContext<NftContextProps | undefined>(undefined);

export const NftProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])



    const [loader,setLoader] = useState(true);
    const [nftProducts, setNftProducts] = useState<Nft[]>([
        {
            id: 1,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/hamlet-nft.svg`,
            cardName: `""Hamlet Contemplates ...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 2,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 100,
            nftImage: `/images/NFT/sir-Lion-nft.svg`,
            cardName: `"Triumphant Awakening...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 3,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/cyber-doberman.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 4,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/Flame-dress-nft.svg`,
            cardName: `"Flame Dress' by Balmain...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 5,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/triumphant-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 6,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/living-vase-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 7,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/hamlet-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 8,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 100,
            nftImage: `/images/NFT/sir-Lion-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 9,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/cyber-doberman.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 10,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/Flame-dress-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 11,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/triumphant-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 12,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/living-vase-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 13,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/hamlet-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "land",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 14,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 100,
            nftImage: `/images/NFT/sir-Lion-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 15,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/cyber-doberman.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "items",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 16,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/Flame-dress-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "items",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 17,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/triumphant-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 0,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 18,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/living-vase-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 19,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/hamlet-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 20,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 100,
            nftImage: `/images/NFT/sir-Lion-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 21,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/cyber-doberman.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 0,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 22,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/Flame-dress-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "land",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 23,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/triumphant-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
        {
            id: 24,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/living-vase-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            stock: 10,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["art", "sports"],
            targetDate: "2023-10-30T08:07:45Z",
            view: 210
        },
    ]);
    const [itemData, setItemData] = useState<Nft | null>(null);

    return (
        <NftContext.Provider value={{ nftProducts, setNftProducts, setItemData ,itemData}}>
           { loader &&  <div className={"df"}>
            </div>}
            {children}
        </NftContext.Provider>
    );
};

export const NftProductContext = () => {
    const context = useContext(NftContext);
    if (!context) {
        throw new Error('NftProductContext must be used within a NftProvider');
    }
    return context;
};
