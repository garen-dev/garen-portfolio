export default function PostCard({ post, onClick }) {
  return (
    <article className="post-card" onClick={onClick}>
      <img
        className="post-card__img"
        src={post.img}
        alt={post.title}
      />

      <div className="post-card__body">
        <div className="post-card__cat">{post.category}</div>

        <h2 className="post-card__title">{post.title}</h2>

        <div className="post-card__meta">
          <span className="post-card__author">{post.author}</span>
          <span>{post.date}</span>
          <span>{post.views}</span>
        </div>

        <p className="post-card__desc">{post.text}</p>
      </div>
    </article>
  );
}