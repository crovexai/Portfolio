import Layout from "../components/Layout";
import GalleryGrid from "../components/GalleryGrid";
import { homeImages } from "../lib/galleryData";

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <h1>Xander Herdia-Leon</h1>
        <p>MODEL PORTFOLIO</p>
      </div>

      <GalleryGrid images={homeImages} />
    </Layout>
  );
}
