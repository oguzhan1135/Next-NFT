'use client'
import Dropdown from "@/Components/FilterDropdown/page";
import React, { useState, useEffect } from "react";
import { NftProductContext } from "@/Context/NftCardContext";
import NftCard from "@/Components/NftCard/page";
const Explore = () => {

  const [filterParam, setFilterParam] = useState({
    category: "All Categories", stock: "All Stocks", short: "Short By"
  })

  const { nftProducts } = NftProductContext()

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
    let filteredProducts = nftProducts.filter((product) => {
      return product.sellCategory === "todays" && product.category.includes(filterParam.category);
    });

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

    return filteredProducts
  };

  let filteredProducts = filteredOperation();
  if (filteredProducts.length === 0) {
    filteredProducts = nftProducts.filter((product) => product.sellCategory === "todays")
  }

  useEffect(() => {
    filteredOperation();
  }, [filterParam]);


  return (
    <main className="main-container">
      <div className="content">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
            <div className="flex flex-row gap-3 items-center flex-wrap">
              <Dropdown
                options={['Art', 'Domain Names', 'Virtual World', 'Trading Cards', 'Sports', 'Utility']}
                defaultOption="All Categories"
                onSelect={handleCategorySelect}
              />
              <Dropdown
                options={['In Stock', 'Out of Stock']}
                defaultOption="All Stock"
                onSelect={handleStockSelect}
              />
              <Dropdown
                options={['Art', 'Domain Names', 'Virtual World', 'Trading Cards', 'Sports', 'Utility']}
                defaultOption="All Items"
                onSelect={deActiveSelect}
              />
            </div>
            <div className="flex flex-row gap-3 items-center">

              <Dropdown
                options={['Art', 'Domain Names', 'Virtual World', 'Trading Cards', 'Sports', 'Utility']}
                defaultOption="All Artworks"
                onSelect={deActiveSelect}
              />
              <Dropdown
                options={['Low to High', 'High to Low']}
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