import ProductHeader from "@/components/ProductHeader/page";
import Navbar from "@/components/Navbar/page";
import ProductDetails from "@/components/ProductDetails/page";
import RatingReviews from "@/components/Rating/page";
import SimilarItems from "@/components/SimilarItems/page";
import Footer from "@/components/Footer/page";

export default function ProductDetailsPage() {
  return (
    <>
      <Navbar />
      <ProductHeader/>
      <ProductDetails />
      <RatingReviews />
      <SimilarItems />
      <Footer />
    </>
  );
}
