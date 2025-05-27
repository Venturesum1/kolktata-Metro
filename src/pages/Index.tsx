
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StationSelector from "@/components/route/StationSelector";
import ContentTabs from "@/components/content/ContentTabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navbar />
      <Header />
      <StationSelector />
      <ContentTabs />
      <Footer />
    </div>
  );
};

export default Index;
