
import Link from "next/link"
import NftCard from "./Components/nft-card/page"
export default function Home() {
  return (
    <main>
      <h1 className="text-2xl mb-10">Welcome to Main Page</h1>
      <div className="flex flex-col gap-6">
        <Link href={"/login"}>Login</Link>
        <Link href={"/signUp"}>SignUp</Link>
        <Link href={"/marketPlace"}>Market-Place</Link>
        <NftCard/>
      </div>


    </main>
  )
}
