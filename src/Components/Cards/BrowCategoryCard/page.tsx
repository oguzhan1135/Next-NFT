import { BrowbyCategory } from "@/Context/NftCardContext"
import Image from "next/image"


interface DataProps {
    data: BrowbyCategory
}
const BrowCategoryCard: React.FC<DataProps> = ({ data }) => {
    return (
        <>
            <div className="bg-on__surface shadow-nft-card dark:bg-black__write inline-flex flex-col gap-5 text-2xl font-bold p-5 rounded-[10px] w-full max-h-[316px] text-on__surface__dark dark:text-on__surface">
                <h3>{data.cardName}</h3>
                <Image
                    src={data.cardImages}
                    alt={`${data.cardName}`}
                    className='w-full '
                    width={1000}
                    height={1000}
                />
            </div>
        </>
    )
}
export default BrowCategoryCard