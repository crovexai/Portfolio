import Layout from "../components/Layout";
import GalleryGrid from "../components/GalleryGrid";
import { fashionImages } from "../lib/galleryData";

export default function Page() {
  return (
    <Layout>
      <h1 className="title">FASHION</h1>
      <GalleryGrid images={fashionImages} />
    </Layout>
  );
}
