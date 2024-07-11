// import Feed from "@/components/Feed"
import Quotes from "@/components/Quotes"

const Home = () => {
  return (
    // Home Page
    <>
      <div className="flex flex-col text-center w-full">
        <h1  className="head_text">Discover & Share Quotes</h1>
        <br className="max-md:hidden" />
        <p className="orange_gradient head_text mb-2 p-2">Your Thoughts</p>
        <p className="desc m-auto">Open Source Tool for the mordern world to discover, create and share creative quotes</p>
        <Quotes />
      </div>

    </>
  )
}

export default Home
