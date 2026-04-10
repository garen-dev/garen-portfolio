import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import MobileMenu from "./components/MobileMenu";
import Popup from "./components/Popup";

function normalizePost(post, index) {
  return {
    id: post.id ?? index + 1,
    title: post.title ?? "Untitled Post",
    category:
      post.category ||
      (Array.isArray(post.tags) ? post.tags[0] : post.tags) ||
      (Array.isArray(post.categories) ? post.categories[0] : post.categories) ||
      "Lifestyle",
    author: post.author ?? post.user ?? "Niek Bove",
    date: post.date ?? post.publishedAt ?? "April 8, 2018",
    views: post.views ?? "3K Views",
    text:
      post.text ??
      post.description ??
      post.excerpt ??
      post.content ??
      post.body ??
      "No description available.",
    img:
      post.img ??
      post.image ??
      post.thumbnail ??
      post.cover ??
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  };
}

const fallbackPosts = [
  {
    id: 1,
    title: "Eat Right For Your Exercise Regime",
    category: "Lifestyle",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button...",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
  {
    id: 2,
    title: "The Look: Perfect Balance",
    category: "Lifestyle",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail.",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
  },
  {
    id: 3,
    title: "Fun Things to Do in Rome",
    category: "Style",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail.",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80",
  },
  {
    id: 4,
    title: "24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
    category: "Style",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail.",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    id: 5,
    title: "9 New Songs to Heat Up Your Fall Playlist",
    category: "Lifestyle",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail.",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    id: 6,
    title: "What You Need on Your Bedside Table",
    category: "Events",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    id: 7,
    title: "When Two Wheels Are Better Than Four",
    category: "Travel",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail.",
    img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
  },
  {
    id: 8,
    title: "26 Living Room Ideas from the Homes of Top Designers",
    category: "Travel",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail.",
    img: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600&q=80",
  },
  {
    id: 9,
    title: "What Makes Your City's Style Unique",
    category: "Music",
    author: "Niek Bove",
    date: "April 8, 2018",
    views: "3K Views",
    text: "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail.",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
  },
];

export default function App() {
  const [posts, setPosts] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch("https://cloud.codesupply.co/endpoint/react/data.json")
      .then((r) => r.json())
      .then((data) => {
        const rawPosts = Array.isArray(data) ? data : data.posts || [];
        const normalizedPosts = rawPosts.map((post, index) =>
          normalizePost(post, index)
        );
        setPosts(normalizedPosts);
      })
      .catch(() => {
        setPosts(fallbackPosts);
      });
  }, []);

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return posts;

    return posts.filter((post) => {
      const searchable = [
        post.title,
        post.category,
        post.text,
        post.author,
        post.date,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchable.includes(q);
    });
  }, [posts, search]);

  return (
    <>
      <Header
        onSearchToggle={() => setSearchOpen((prev) => !prev)}
        searchOpen={searchOpen}
        onHamburger={() => setMobileMenuOpen(true)}
      />

      {searchOpen && (
        <div className="search-panel">
          <div className="search-panel__inner">
            <input
              className="search-panel__input"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
        </div>
      )}

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <main className="posts-wrap">
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>
      </main>

      <Popup
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </>
  );
}