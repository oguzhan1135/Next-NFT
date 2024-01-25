


interface TabProps {
    handleTabClick: (sellcategory: string) => void;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const TabFilter: React.FC<TabProps> = ({ handleTabClick, activeTab, setActiveTab }) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-gray dark:bg-on__surface__dark">
                <div
                    className={`marketplace-tab-btn ${activeTab === "live" ? 'active' : ''}`}
                    onClick={() => handleTabClick("live")}
                >
                    Live Auction
                </div>
                <div
                    className={`marketplace-tab-btn ${activeTab === "todays" ? 'active' : ''}`}
                    onClick={() => handleTabClick("todays")}
                >
                    Todays Picks
                </div>
                <div
                    className={`marketplace-tab-btn ${activeTab === "land" ? 'active' : ''}`}
                    onClick={() => handleTabClick("land")}
                >
                    Land
                </div>
                <div
                    className={`marketplace-tab-btn ${activeTab === "items" ? 'active' : ''}`}
                    onClick={() => handleTabClick("items")}
                >
                    Items
                </div>
            </div>
        </>
    )
}
export default TabFilter