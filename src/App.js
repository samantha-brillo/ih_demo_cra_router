import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//Router nos indica que vamos a tener rutas
//Switch es una funcion que va a leer la url a la que el  usuario esta entrando
//Route son las rutas que vamos a tener
import Articles from "./components/articles";
import Article from "./components/article";
import Contacto from "./components/Contacto";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App(props) {
  const allArticles = [
    {
      title: "¿Cómo tener mejor negociación en una entrevista?",
      date: "03/24/21",
      imageUrl:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      photoAuthor: "Amy Hirschi",
      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
      slug: "mejor-negociacion-entrevista",
      topic: "busqueda",
    },
    {
      title: "Recomendaciones para crear un CV en 2021",
      date: "03/15/21",
      imageUrl:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8am9ifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      photoAuthor: "Markus Winkler",
      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
      slug: "recomendaciones-cv-2021",
      topic: "busqueda",
    },
    {
      title:
        "¿Por qué en Latinoamérica se trabaja más y se gana menos que en otros lados?",
      date: "02/24/21",
      imageUrl:
        "https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGF0YW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      photoAuthor: "Ezequiel Garrido",
      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
      slug: "latam-sueldos-brecha",
      topic: "estadistica",
    },
    {
      title: "¿Cómo funciona la inflación?",
      date: "01/24/21",
      imageUrl:
        "https://images.unsplash.com/photo-1574607383172-1421479aec9d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vbmV5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      photoAuthor: "Annie Spratt",
      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
      slug: "como-funciona-inflacion",
      topic: "estadistica",
    },
  ];
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => <Articles todosLosArticulos={allArticles} />}
            exact
          />
          <Route path="/contacto" component={Contacto} exact />
          <Route
            path="/:slug"
            render={() => <Article todosLosArticulos={allArticles} />}
            exact
          />
          {/* <Route 
            path="/:usuario/miperfil"
            component={Contacto}
            exact
          /> */}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
