import HomeBanner from "../components/Home/HomeBanner";
import MainContent from "../components/Home/MainContent";
import Section from "../components/Home/Section";

const Home = () => {

   


  return (
    <>
   <div className="mb-4">
     <HomeBanner/>
   </div>
     <MainContent/>
      <Section />
    </>
  )
}

export default Home;