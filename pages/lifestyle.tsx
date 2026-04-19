import Layout from "../components/Layout";
import GalleryGrid from "../components/GalleryGrid";
import { lifestyleImages } from "../lib/galleryData";

export default function Page() {
  return (
    <Layout>
      <h1 className="title">LIFESTYLE</h1>
      <GalleryGrid images={lifestyleImages} />
    </Layout>
  );
}
