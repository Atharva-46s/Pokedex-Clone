import { SocialMedia } from "../../SocialMedia";
import * as C from "./styles";

export const Footer = () => {
  return (
    <div className="main-container">
      <C.Container>
        <C.Copy>
          <span>Image rights belong to Nintendo & The Pokémon Company</span>
          <span>Data provided by the PokéAPI - pokeapi.co</span>
        </C.Copy>
        <SocialMedia />
      </C.Container>
    </div>
  );
};
