import style from './Post.module.css';

export default function Post({ post }) {
  return (
    <div className={style.post}>
      <img
        className={style.capa}
        src={`/assets/posts/${post.id}/capa.png`}
        alt='Imagem da capa do post'
      />
      <h2 className={style.titulo}>{post.titutlo}</h2>
      <button className={style.botaoLer}>Ler</button>
    </div>
  );
}
