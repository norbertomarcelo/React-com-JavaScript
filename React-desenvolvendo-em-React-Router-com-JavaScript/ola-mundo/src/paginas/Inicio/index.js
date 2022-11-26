import Post from 'componentes/Post';
import posts from 'json/posts.json';
import style from './Inicio.module.css';

export default function Inicio() {
  return (
    <ul className={style.posts}>
      {posts.map((post) => (
        <li key={posts.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
