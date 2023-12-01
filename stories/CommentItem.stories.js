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
    avatarURL:"https://cdn1.iconfinder.com/data/icons/emoticon-of-avatar-man/128/05_man_mocking_avatar_emoticon_smiley_people_user-512.png",
    first: true,
    comment: "“Necesitaba cambiar las fechas de mi viaje, me comuniqué con Satena y fue fácil y rápido hacerlo. El mejor servicio al cliente que he usado”",
    author: "Erick Padilla",
    from: "Medellín",
    to: "Caracas",
  },
};

export const Comment2 = {
  args: {
    avatarURL:"https://cdn1.iconfinder.com/data/icons/emoticon-of-avatar-man/128/05_man_mocking_avatar_emoticon_smiley_people_user-512.png",
    first: false,
    comment: "“Necesitaba cambiar las fechas de mi viaje, me comuniqué con Satena y fue fácil y rápido hacerlo. El mejor servicio al cliente que he usado”",
    author: "Andrés Guzmán",
    from: "Bogotá",
    to: "Nuquí",
  },
};
