'use client'
import Dropdown from "@/Components/FilterDropdown/page";
import React, { useState, useEffect } from "react";
import { NftProductContext } from "@/Context/NftCardContext";
import NftCard from "@/Components/NftCard/page";
import InCorrectMessage from "@/Components/Messages/InCorrectMessage/page";
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
const Explore = () => {

  const [filterParam, setFilterParam] = useState({
    category: "All Categories", stock: "All Stocks", short: "Short By"
  })

  const { nftProducts } = NftProductContext()
  const [message, setMessage] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Nft[]>([]);
  const handleCategorySelect = (selectedCategory: string) => {
    setFilterParam({ category: selectedCategory, short: filterParam.short, stock: filterParam.stock })
  };

  const handleStockSelect = (selectedStockOption: string) => {
    setFilterParam({ category: filterParam.category, short: filterParam.short, stock: selectedStockOption })

  };
  const handleShortBySelect = (selectedShortBuyOption: string) => {
    setFilterParam({ category: filterParam.category, short: selectedShortBuyOption, stock: filterParam.stock })

  };
  const deActiveSelect = (deactiveOption: string) => { }


  const filteredOperation = () => {
    let filteredProducts = nftProducts.filter((product) => product.sellCategory === "todays");

    if (filterParam.category !== "All Categories") {
      filteredProducts = filteredProducts.filter((product) => {
        return product.sellCategory === "todays" && product.category.includes(filterParam.category);
      });
    }

    if (filterParam.stock === "In Stock") {
      filteredProducts = filteredProducts.filter((product) => product.stock > 0);
    } else if (filterParam.stock === "Out of Stock") {
      filteredProducts = filteredProducts.filter((product) => product.stock === 0);
    }

    if (filterParam.short === "Low to High") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (filterParam.short === "High to Low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };


  useEffect(() => {
    const updatedProducts = filteredOperation();
    if (updatedProducts.length === 0) {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
        setFilteredProducts(nftProducts.filter((product) => product.sellCategory === "todays"));
      }, 2000);
    } else {
      setFilteredProducts(updatedProducts);
    }
  }, [filterParam, nftProducts]);


  return (
    <main className="main-container">
      <div className="content">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            <div className="flex flex-row gap-3 items-center flex-wrap">
              <Dropdown
                options={['All Categories', 'Art', 'Domain Names', 'Virtual World', 'Trading Cards', 'Sports', 'Utility']}
                defaultOption="All Categories"
                onSelect={handleCategorySelect}
              />
              <Dropdown
                options={['All Stock', 'In Stock', 'Out of Stock']}
                defaultOption="All Stock"
                onSelect={handleStockSelect}
              />
              <Dropdown
                options={['Art', 'Domain Names', 'Virtual World', 'Trading Cards', 'Sports', 'Utility']}
                defaultOption="All Items"
                onSelect={deActiveSelect}
              />
            </div>
            {
              message ? <InCorrectMessage message="Sorry! No product was found that matches the filter features you requested." /> : <></>
            }
            <div className="flex flex-row gap-3 items-center">

              <Dropdown
                options={['Art', 'Domain Names', 'Virtual World', 'Trading Cards', 'Sports', 'Utility']}
                defaultOption="All Artworks"
                onSelect={deActiveSelect}
              />
              <Dropdown
                options={['Short By', 'Low to High', 'High to Low']}
                defaultOption="Short By"
                onSelect={handleShortBySelect}
              />
            </div>
          </div>

          <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-8'>

            {filteredProducts.map((filteredCard) => (
              <NftCard key={filteredCard.id} nftCardData={filteredCard} />
            ))}

          </div>
          <div className="button white-b max-w mx-auto">
            Load More
          </div>
        </div>
      </div>
    </main>
  );
};

export default Explore;