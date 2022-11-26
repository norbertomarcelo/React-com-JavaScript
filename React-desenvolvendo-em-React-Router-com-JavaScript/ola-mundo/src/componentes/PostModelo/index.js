import style from './PostModelo.module.css';

export default function PostModelo({ children, fotoCapa, titulo }) {
  return (
    <article className={style.postModeloContainer}>
      <div
        className={style.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>
      <h2 className={style.titulo}>{titulo}</h2>
      <div className={style.postConteudoContainer}>{children}</div>
    </article>
  );
}
