import { Link } from "react-router-dom";

export default function Articles(props) {
  return (
    <div>
      Esta es mi página de artículos
      {props.todosLosArticulos.map((e) => {
        return (
          <>
            <Link to={`/${e.slug}`}>
              <p>{e.title}</p>
            </Link>
            <p>{e.date}</p>
            <img alt="Photo" src={e.imageUrl} />
          </>
        );
      })}
    </div>
  );
}
