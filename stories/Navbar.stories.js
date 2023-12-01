import { Navbar } from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },

};

export const Labels = {
  args: {
    links: [
      { text: "Destinos", href: "#ref" },
      { text: "Vuelos", href: "#ref" },
      { text: "Check in", href: "#ref" },
      { text: "Iniciar sesión", href: "#ref" },
    ],
    onChange: () => {},
    theme: "light",
  },
};
