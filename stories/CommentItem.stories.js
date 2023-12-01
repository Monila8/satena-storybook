import { CommentItem } from "./CommentItem";

export default {
  title: "Elements/CommentItem",
  component: CommentItem,
  parameters: {
    layout: "centered",
  },
};

export const Comment1 = {
  args: {
    first: true,
    avatarURL: "https://i.pravatar.cc/300",
    comment:
      "“Necesitaba cambiar las fechas de mi viaje, me comuniqué con Satena y fue fácil y rápido hacerlo. El mejor servicio al cliente que he usado”",
    author: "Erick Padilla",
    from: "Medellín",
    to: "Caracas",
  },
};

export const Comment2 = {
  args: {
    avatarURL: "https://i.pravatar.cc/301",
    first: false,
    author: "Andrés Guzmán",
    comment:
      "“Fue un vuelo muy puntual, sin ningún problema al momento de comprar. Recomiendo completamente usar Satena para viajar”",
    from: "Bogotá",
    to: "Nuquí",
  },
};
