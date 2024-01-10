'use client'
import { createContext, useContext, ReactNode, useState, useEffect, use } from 'react';

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

interface AuthorData {
    authorName: string;
    authorAvatar: string;
}

interface LoginUser {
    id: number;
    name: string;
    mail: string;
    password: string
}
interface NftContextProps {
    nftProducts: Nft[];
    setNftProducts: React.Dispatch<React.SetStateAction<Nft[]>>;
    itemData: Nft | null;
    setItemData: React.Dispatch<React.SetStateAction<Nft | null>>;
    authorData: AuthorData | null;
    setAuthorData: React.Dispatch<React.SetStateAction<AuthorData | null>>;
    user: LoginUser[];
    setUser: React.Dispatch<React.SetStateAction<LoginUser[]>>
    loggedUser: LoginUser;
    setLoggedUser: React.Dispatch<React.SetStateAction<LoginUser>>
}

const NftContext = createContext<NftContextProps | undefined>(undefined);

export const NftProvider: React.FC<{ children: ReactNode }> = ({ children }) => {


    const [nftProducts, setNftProducts] = useState<Nft[]>([
        {
            id: 1,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 100,
            nftImage: `/images/NFT/hamlet-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1400,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "live",
            category: ["art", "sports"],
            targetDate: "2024-01-30T18:27:45Z",
            view: 210,
            stock: 10
        },
        {
            id: 2,
            createrName: "Freddie Carpenter",
            createrAvatar: `/images/avatar/freddie.svg`,
            like: 113,
            nftImage: `/images/NFT/Flame-dress-nft.svg`,
            cardName: `"Flame Dress' by Balmain...`,
            price: 1875,
            currentBid: ``,
            currency: "eth",
            file: "image",
            sellCategory: "live",
            category: ["utulity", "sports"],
            targetDate: "2024-01-16T03:40:00Z",
            stock: 5,
            view: 200

        },
        {
            id: 3,
            createrName: "Salvadordali",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 24,
            nftImage: `/images/NFT/sir-Lion-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 2500,
            currentBid: ``,
            currency: "busd",
            file: "image",
            sellCategory: "todays",
            category: ["utulity", "art"],
            stock: 2,
            view: 210,
            targetDate: ""

        },
        {
            id: 4,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 440,
            nftImage: `/images/NFT/cyber-doberman.svg`,
            cardName: `"The RenaiXance Rising...`,
            price: 875,
            currentBid: ``,
            currency: "busd",
            file: "image",
            sellCategory: "todays",
            category: ["domain", "collectibles"],
            stock: 0,
            view: 210,
            targetDate: ""
        },
        {
            id: 5,
            createrName: "Samson Frost",
            createrAvatar: `/images/avatar/samson.svg`,
            like: 266,
            nftImage: `/images/NFT/Flame-dress-nft.svg`,
            cardName: `"Flame Dress' by Balmain...`,
            price: 2200,
            currentBid: ``,
            currency: "eth",
            file: "audio",
            sellCategory: "land",
            category: ["domain", "trading", "music"],
            view: 145,
            stock: 3,
            targetDate: ""
        },
        {
            id: 6,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 701,
            nftImage: `/images/NFT/triumphant-nft.svg`,
            cardName: `"Flame Dress' by Balmain...`,
            price: 1400,
            currentBid: ``,
            currency: "eth",
            file: "audio",
            sellCategory: "land",
            category: ["collectibles", "sports", "music"],
            view: 145,
            stock: 10,
            targetDate: ""
        },
        {
            id: 7,
            createrName: "Freddie Carpeter",
            createrAvatar: `/images/avatar/freddie.svg`,
            like: 455,
            nftImage: `/images/NFT/sir-Lion-nft.svg`,
            cardName: `"Flame Dress' by Balmain...`,
            price: 1875,
            currentBid: ``,
            currency: "eth",
            file: "image",
            sellCategory: "live",
            category: ["utulity", "sports"],
            targetDate: "2024-01-18T12:57:00Z",
            view: 145,
            stock: 4,

        },
        {
            id: 8,
            createrName: "Salvadordali",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 215,
            nftImage: `/images/NFT/cyber-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 2500,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "items",
            category: ["utulity", "collectibles"],
            view: 105,
            targetDate: "",
            stock: 1
        },
        {
            id: 9,
            createrName: "Tyler Covington",
            createrAvatar: `/images/avatar/tyler.svg`,
            like: 221,
            nftImage: `/images/NFT/sir-Lion-nft.svg`,
            cardName: `"The RenaiXance Rising...`,
            price: 875,
            currentBid: ``,
            currency: "bnb",
            file: "audio",
            sellCategory: "items",
            category: ["art"],
            view: 158,
            stock: 4,
            targetDate: ""
        },
        {
            id: 10,
            createrName: "Samson Frost",
            createrAvatar: `/images/avatar/samson.svg`,
            like: 152,
            nftImage: `/images/NFT/Flame-dress-nft.svg`,
            cardName: `"Flame Dress' by Balmain...`,
            price: 2200,
            currentBid: ``,
            currency: "busd",
            file: "audio",
            sellCategory: "items",
            category: ["sports", "music"],
            view: 145,
            stock: 3,
            targetDate: ""
        },
        {
            id: 11,
            createrName: "Freddie Carpeter",
            createrAvatar: `/images/avatar/samson.svg`,
            like: 500,
            nftImage: `/images/NFT/living-vase-nft.svg`,
            cardName: `"Flame Dress' by Balmain...`,
            price: 1875,
            currentBid: ``,
            currency: "eth",
            file: "video",
            sellCategory: "live",
            category: ["art"],
            targetDate: "2023-10-31T12:00:00Z",
            view: 145,
            stock: 6
        },
        {
            id: 12,
            createrName: "Samon Frost",
            createrAvatar: `/images/avatar/samson.svg`,
            like: 299,
            nftImage: `/images/NFT/triumphant-nft.svg`,
            cardName: `"Flame Dress' by Balmain...`,
            price: 2475,
            currentBid: ``,
            currency: "eth",
            file: "video",
            sellCategory: "live",
            category: ["art", "domain"],
            targetDate: "2023-11-01T12:00:00Z",
            view: 145,
            stock: 4
        },
        {
            id: 13,
            createrName: "Salvadordali",
            createrAvatar: `/images/avatar/mason.svg`,
            like: 122,
            nftImage: `/images/NFT/sir-Lion-nft.svg`,
            cardName: `"Space babe - Night 2/25”`,
            price: 1200,
            currentBid: ``,
            currency: "eth",
            file: "image",
            sellCategory: "todays",
            category: ["collectibles"],
            stock: 1,
            view: 145,
            targetDate: ""
        },
        {
            id: 14,
            createrName: "Salvadordali",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 133,
            nftImage: `/images/NFT/triumphant-nft.svg`,
            cardName: `"CyberPrimal 042 LAN”`,
            price: 1997,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["utulity", "virtual"],
            stock: 1,
            view: 145,
            targetDate: ""
        },
        {
            id: 15,
            createrName: "Salvadordali",
            createrAvatar: `/images/avatar/crispin.svg`,
            like: 144,
            nftImage: `/images/NFT/hamlet-nft.svg`,
            cardName: `"Crypto Egg Stamp #5”`,
            price: 2015,
            currentBid: ``,
            currency: "busd",
            file: "image",
            sellCategory: "todays",
            category: ["virtual"],
            stock: 1,
            view: 298,
            targetDate: ""
        },
        {
            id: 16,
            createrName: "Salvadordali",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 155,
            nftImage: `/images/NFT/Flame-dress-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 2005,
            currentBid: ``,
            currency: "busd",
            file: "image",
            sellCategory: "todays",
            category: ["virtual", "domain", "music"],
            stock: 0,
            view: 566,
            targetDate: ""
        },
        {
            id: 17,
            createrName: "Salvadordali",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 188,
            nftImage: `/images/NFT/cyber-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 1320,
            currentBid: ``,
            currency: "eth",
            file: "image",
            sellCategory: "todays",
            category: ["sports", "virtual", "music"],
            stock: 1,
            view: 100,
            targetDate: ""
        },
        {
            id: 18,
            createrName: "Salvadordali",
            createrAvatar: `/images/avatar/salvadordali.svg`,
            like: 199,
            nftImage: `/images/NFT/travel-nft.svg`,
            cardName: `"Loving Vase 01 by Lanza...`,
            price: 875,
            currentBid: ``,
            currency: "bnb",
            file: "image",
            sellCategory: "todays",
            category: ["trading"],
            stock: 1,
            view: 235,
            targetDate: ""
        },
    ]);
    const [user, setUser] = useState<LoginUser[]>([
        {
            id: 1,
            name: "Oguzhan Dönmez",
            mail: "oguzhan@gmail.com",
            password: "oguzhan123"
        },
        {
            id: 2,
            name: "Tayfun Çakır",
            mail: "tayfun@gmail.com",
            password: "tayfun123"
        },
        {
            id: 3,
            name: "Ahmet Çakır",
            mail: "ahmet@gmail.com",
            password: "ahmet123"
        },
        {
            id: 4,
            name: "Ferdi Tosun",
            mail: "ferdi@gmail.com",
            password: "ferdi123"
        }
    ])
    const [loggedUser, setLoggedUser] = useState<LoginUser>({ id: 1, name: "", mail: "", password: "" })
    const [itemData, setItemData] = useState<Nft | null>(null);
    const [authorData, setAuthorData] = useState<AuthorData | null>(null);

    return (
        <NftContext.Provider value={{ nftProducts, setNftProducts, setItemData, itemData, authorData, setAuthorData, user, setUser, loggedUser, setLoggedUser }}>
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
