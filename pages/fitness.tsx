import Layout from "../components/Layout";
import GalleryGrid from "../components/GalleryGrid";
import { fitnessImages } from "../lib/galleryData";

export default function Page() {
  return (
    <Layout>
      <h1 className="title">FITNESS</h1>
      <GalleryGrid images={fitnessImages} />
    </Layout>
  );
}
