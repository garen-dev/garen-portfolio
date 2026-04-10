export default function Popup({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>

        <img
          className="popup__img"
          src={post.img}
          alt={post.title}
        />

        <div className="popup__body">
          <div className="popup__cat">
            {post.category}
          </div>

          <h2 className="popup__title">
            {post.title}
          </h2>

          <div className="popup__meta">
            <span className="popup__author">{post.author}</span>
            <span>{post.date}</span>
            <span>{post.views}</span>
          </div>

          <p className="popup__desc">
            {post.text}
          </p>
        </div>
      </div>
    </div>
  );
}