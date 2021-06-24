import cn from "classnames";
import s from "./subheader.module.scss";
export function Subheader() {
  return (
    <>
      <div className={cn(s.subheader_container, "mb-20")}>
        {/* LEFT */}
        <div className="flex flex-col">
          <span className="flex justify-between">
            <span>Facture n.</span> <span className="font-bold">00001</span>
          </span>
          <span className="flex justify-between">
            <span>Emise le </span>
            <span className="font-bold">12 Octobre 2021</span>
          </span>
        </div>

        {/* WHITESPACE */}
        <span></span>

        {/* RIGHT */}
        <div className={cn("flex flex-col justify-self-end", s.client_info)}>
          <span className="mb-3 text-blue-light">Réalisée pour la société</span>
          <h3 className="font-spartan text-3xl font-bold">Galadrim</h3>
          <span>30 Rue de l'Échiquier</span>
          <span>75017 Paris</span>
        </div>
      </div>

      {/* SUBHEADER */}
      <div className="mb-10">
        <span>Période: </span>
        <span>
          Du <span className="font-bold">15 Avril 2021</span> au{" "}
          <span className="font-bold"> 29 Avril 2021</span>
        </span>
      </div>
    </>
  );
}
