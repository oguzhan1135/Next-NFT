import Dropdown from "@/Components/FilterDropdown/page";
import { BiCategory } from "react-icons/bi";
import { CiCircleList } from "react-icons/ci";

interface HeaderProps {
    isListView: boolean;
    setListView: React.Dispatch<React.SetStateAction<boolean>>;
    handleShortBySelect: (selectedShortBuyOption: string) => void;}

const MarketplaceHeader: React.FC<HeaderProps> = ({ isListView, setListView ,handleShortBySelect}) => {
    return (
        <>
            <div className="flex  items-center justify-between">
                <h1 className='text-4xl font-bold'>1000 Items</h1>
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="flex flex-row overflow-hidden border-gray border dark:border-black__write rounded-xl">
                        <div
                            onClick={() => setListView(false)}
                            className={` px-5 py-3  flex flex-row gap-2 font-bold items-center justify-center cursor-pointer ${!isListView ? 'bg-gray dark:bg-black__write' : ''}`}
                        >
                            <BiCategory />
                            <span className='font-bold'>Grid</span>
                        </div>
                        <div
                            onClick={() => setListView(true)}
                            className={`px-5 py-3 flex flex-row gap-2 font-bold items-center  justify-center cursor-pointer ${isListView ? 'bg-gray dark:bg-black__write' : ''}`}
                        >
                            <CiCircleList />
                            <span className='font-bold'>List</span>
                        </div>
                    </div>
                    <Dropdown options={["Short By", "Low to High", "High to Low"]} defaultOption='Short By' onSelect={handleShortBySelect} />
                </div>
            </div>
        </>
    )
}
export default MarketplaceHeader