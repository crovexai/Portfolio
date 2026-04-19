import Layout from "../components/Layout";

const links = [
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername"
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@yourusername"
  },
  {
    name: "Twitter / X",
    url: "https://x.com/yourusername"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@yourchannel"
  },
  {
    name: "Email",
    url: "mailto:youremail@gmail.com"
  }
];

export default function SocialPage() {
  return (
    <Layout>
      <div className="social-page">

        <h1 className="social-title">RAYER VAN-RISTELL</h1>
        <p className="social-sub">Connect with me</p>

        <div className="social-links">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              {link.name}
            </a>
          ))}
        </div>

      </div>
    </Layout>
  );
}
