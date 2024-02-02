'use client'
import React, { createContext, useContext, ReactNode, useState, useEffect, use } from 'react';

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

interface Seller {
    id: number;
    image: string;
    name: string;
    total: number;
}

interface AuthorData {
    authorName: string;
    authorAvatar: string;
}

interface Collection {
    id: number;
    cardName: string;
    createrAvatar: string;
    createrName: string;
    like: number;
    collectOne: string;
    collectTwo: string;
    collectThree: string;
    collectFour: string;
}
interface CollectionV2 {
    id: number;
    cardName: string;
    createrAvatar: string;
    createrName: string;
    like: number;
    collectOne: string;
    collectTwo: string;
    collectThree: string;
    collectFour: string;
}
export interface BrowbyCategory {
    id: number;
    cardName: string;
    cardImages: string;
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
    topSeller: Seller[];
    setTopSeller: React.Dispatch<React.SetStateAction<Seller[]>>;
    collection:Collection[];
    setCollection:React.Dispatch<React.SetStateAction<Collection[]>>;
    collectionV2: CollectionV2[];
    setCollectionV2: React.Dispatch<React.SetStateAction<CollectionV2[]>>;
    itemData: Nft | null;
    setItemData: React.Dispatch<React.SetStateAction<Nft | null>>;
    authorData: AuthorData | null;
    setAuthorData: React.Dispatch<React.SetStateAction<AuthorData | null>>;
    user: LoginUser[];
    setUser: React.Dispatch<React.SetStateAction<LoginUser[]>>
    loggedUser: LoginUser;
    setLoggedUser: React.Dispatch<React.SetStateAction<LoginUser>>
    browbyCategoryCards: BrowbyCategory[];
    setBrowbyCategoryCards: React.Dispatch<React.SetStateAction<BrowbyCategory[]>>;
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
            currency: "BNB",
            file: "Image",
            sellCategory: "live",
            category: ["Art", "Sports"],
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
            currency: "ETH",
            file: "Image",
            sellCategory: "live",
            category: ["Utility", "Sports"],
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
            currency: "BUSD",
            file: "Image",
            sellCategory: "todays",
            category: ["Utility", "Art"],
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
            currency: "BUSD",
            file: "Image",
            sellCategory: "todays",
            category: ["Domain Names", "Collectibles"],
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
            currency: "ETH",
            file: "Audio",
            sellCategory: "land",
            category: ["Domain Names", "Trading Cards", "Music"],
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
            currency: "ETH",
            file: "Audio",
            sellCategory: "land",
            category: ["Collectibles", "Sports", "Music"],
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
            currency: "ETH",
            file: "Image",
            sellCategory: "live",
            category: ["Utility", "Sports"],
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
            currency: "BNB",
            file: "Image",
            sellCategory: "items",
            category: ["Utility", "Collectibles"],
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
            currency: "BNB",
            file: "Audio",
            sellCategory: "items",
            category: ["Art"],
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
            currency: "BUSD",
            file: "Audio",
            sellCategory: "items",
            category: ["Sports", "Music"],
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
            currency: "ETH",
            file: "Video",
            sellCategory: "live",
            category: ["Art"],
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
            currency: "ETH",
            file: "Video",
            sellCategory: "live",
            category: ["Art", "Domain Names"],
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
            currency: "ETH",
            file: "Image",
            sellCategory: "todays",
            category: ["Collectibles"],
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
            currency: "BNB",
            file: "Image",
            sellCategory: "todays",
            category: ["Utility", "Virtual World"],
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
            currency: "BUSD",
            file: "Image",
            sellCategory: "todays",
            category: ["Virtual World"],
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
            currency: "BUSD",
            file: "Image",
            sellCategory: "todays",
            category: ["Virtual World", "Domain Names", "Music"],
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
            currency: "ETH",
            file: "Image",
            sellCategory: "todays",
            category: ["Sports", "Virtual World", "Music"],
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
            currency: "BNB",
            file: "Image",
            sellCategory: "todays",
            category: ["Trading Cards"],
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
    const [topSeller, setTopSeller] = useState<Seller[]>([
        {
            id: 1,
            name: "Crispin Barry",
            total: 255,
            image: `/images/avatar/crispin.svg`,
        },
        {
            id: 2,
            name: "Samson Frost",
            total: 214,
            image: `/images/avatar/samson.svg`,
        },
        {
            id: 3,
            name: "Tommy Alvarez",
            total: 140,
            image: `/images/avatar/tommy.svg`,
        },
        {
            id: 4,
            name: "Andy Harbutt",
            total: 266,
            image: `/images/avatar/andy.svg`,
        },
        {
            id: 5,
            name: "Monica Lucas",
            total: 46,
            image: `/images/avatar/monica.svg`,
        },
        {
            id: 6,
            name: "Matt Ramos",
            total: 174,
            image: `/images/avatar/matt.svg`,
        },
        {
            id: 7,
            name: "Harper Wilcher",
            total: 114,
            image: `/images/avatar/harper.svg`,
        },
        {
            id: 8,
            name: "Harper Wilcher",
            total: 114,
            image: `/images/avatar/harper.svg`,
        }, {
            id: 9,
            name: "Harper Wilcher",
            total: 114,
            image: `/images/avatar/harper.svg`,
        },
        {
            id: 10,
            name: "Harper Wilcher",
            total: 114,
            image: `/images/avatar/harper.svg`,
        },
        {
            id: 11,
            name: "Harper Wilcher",
            total: 114,
            image: `/images/avatar/harper.svg`,
        },
    ])
    const [collection, setCollection] = useState<Collection[]>([
        {
            id: 1,
            cardName: "Creative Art Collection",
            like: 120,
            createrName: "Samson Garraway",
            createrAvatar: `/images/avatar/samson.svg`,
            collectOne: `/images/NFT/collection-item-1-1.svg`,
            collectTwo: `/images/NFT/collection-item-top-1-1.svg`,
            collectThree: `images/NFT/collection-item-top-1-2.svg`,
            collectFour: `images/NFT/collection-item-bottom-1.svg`

        },
        {
            id: 2,
            cardName: "Creative Art Collection",
            like: 220,
            createrName: "Matt Garr",
            createrAvatar: `/images/avatar/matt.svg`,
            collectOne: `/images/NFT/collection-item-2-1.svg`,
            collectTwo: `/images/NFT/collection-item-top-2-1.svg`,
            collectThree: `images/NFT/collection-item-top-2-2.svg`,
            collectFour: `images/NFT/collection-item-bottom-2.svg`

        },
        {
            id: 3,
            cardName: "Creative Art Collection",
            like: 98,
            createrName: "Trista Garraway",
            createrAvatar: `/images/avatar/trista.svg`,
            collectOne: `/images/NFT/collection-item-3-1.svg`,
            collectTwo: `/images/NFT/collection-item-top-3-1.svg`,
            collectThree: `images/NFT/collection-item-top-3-2.svg`,
            collectFour: `images/NFT/collection-item-bottom-3.svg`

        },
        {
            id: 4,
            cardName: "Creative Art Collection",
            like: 320,
            createrName: "Harper Garraway",
            createrAvatar: `/images/avatar/harper.svg`,
            collectOne: `/images/NFT/collection-item-1-1.svg`,
            collectTwo: `/images/NFT/collection-item-top-1-1.svg`,
            collectThree: `images/NFT/collection-item-top-1-2.svg`,
            collectFour: `images/NFT/collection-item-bottom-1.svg`

        }
    ])
    const [collectionV2, setCollectionV2] = useState<Collection[]>([
        {
            id: 1,
            cardName: "Creative Art Collection",
            like: 120,
            createrName: "Samson Garraway",
            createrAvatar: `/images/avatar/samson.svg`,
            collectOne: `/images/other/collection-v2-top.svg`,
            collectTwo: `/images/NFT/collection-item-top-1-1.svg`,
            collectThree: `images/NFT/collection-item-top-1-2.svg`,
            collectFour: `images/NFT/collection-item-top-2-1.svg`

        },
        {
            id: 2,
            cardName: "Creative Art Collection",
            like: 220,
            createrName: "Matt Garr",
            createrAvatar: `/images/avatar/matt.svg`,
            collectOne: `/images/other/collection-v2-2-top.svg`,
            collectTwo: `/images/NFT/collection-item-top-1-1.svg`,
            collectThree: `images/NFT/collection-item-top-1-2.svg`,
            collectFour: `images/NFT/collection-item-top-2-1.svg`

        },
        {
            id: 3,
            cardName: "Creative Art Collection",
            like: 98,
            createrName: "Trista Garraway",
            createrAvatar: `/images/avatar/trista.svg`,
            collectOne: `/images/other/collection-v2-3-top.svg`,
            collectTwo: `/images/NFT/collection-item-top-1-1.svg`,
            collectThree: `images/NFT/collection-item-top-1-2.svg`,
            collectFour: `images/NFT/collection-item-top-2-1.svg`

        },
        {
            id: 4,
            cardName: "Creative Art Collection",
            like: 320,
            createrName: "Harper Garraway",
            createrAvatar: `/images/avatar/harper.svg`,
            collectOne: `/images/other/collection-v2-2-top.svg`,
            collectTwo: `/images/NFT/collection-item-top-1-1.svg`,
            collectThree: `images/NFT/collection-item-top-1-2.svg`,
            collectFour: `images/NFT/collection-item-top-2-1.svg`

        }
    ])
    const [browbyCategoryCards, setBrowbyCategoryCards] = useState<BrowbyCategory[]>([
        {
            id: 1,
            cardName: "Music",
            cardImages: `/images/other/music.svg`
        },
        {
            id: 2,
            cardName: "Domain Names",
            cardImages: `/images/other/domain-names.svg`
        },
        {
            id: 3,
            cardName: "Virtual World",
            cardImages: `/images/other/virtual.svg`
        },
        {
            id: 4,
            cardName: "Utility",
            cardImages: `/images/other/utility.svg`
        },
        {
            id: 5,
            cardName: "Music",
            cardImages: `/images/other/music.svg`
        },
        {
            id: 6,
            cardName: "Music",
            cardImages: `/images/other/music.svg`
        },
        {
            id: 7,
            cardName: "Music",
            cardImages: `/images/other/music.svg`
        },
        {
            id: 8,
            cardName: "Domain Names",
            cardImages: `/images/other/domain-names.svg`
        },
        {
            id: 9,
            cardName: "Virtual World",
            cardImages: `/images/other/virtual.svg`
        },
        {
            id: 10,
            cardName: "Uility",
            cardImages: `/images/other/utility.svg`
        },
        {
            id: 11,
            cardName: "Domain Names",
            cardImages: `/images/other/domain-names.svg`
        },
        {
            id: 12,
            cardName: "Virtual World",
            cardImages: `/images/other/virtual.svg`
        },

    ])
    const [loggedUser, setLoggedUser] = useState<LoginUser>({ id: 1, name: "", mail: "", password: "" })
    const [itemData, setItemData] = useState<Nft | null>(null);
    const [authorData, setAuthorData] = useState<AuthorData | null>(null);

    return (
        <NftContext.Provider value={{
            nftProducts, setNftProducts, setItemData, itemData, authorData,
            setAuthorData, user, setUser, loggedUser, setLoggedUser, topSeller, setTopSeller, collection, setCollection,
            browbyCategoryCards, setBrowbyCategoryCards, collectionV2, setCollectionV2
        }}>
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
