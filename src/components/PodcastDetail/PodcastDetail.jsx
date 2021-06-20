import React from "react";
import { useState } from "react";
import { ReactComponent as ArrowIcon } from './arrow.svg'

const PodcastDetail = () => {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div>
      <div>
        <h3>Episódio 2 - Produtividade no home office</h3>
      </div>
      <div
        style={{
          height: openDetail ? "100%" : "50px",
          overflow: "hidden",
        }}
      >
        <p>
          Home office ou escritório em casa, também chamado de trabalho remoto,
          trabalho à distância ou teletrabalho, é uma tendência mundial que a
          cada ano ganha mais adeptos.
        </p>
        <p>
          O mundo mudou e o mercado de trabalho foi forçado a passar por uma
          revolução de todos seus sistemas e condutas impostas, o home office
          foi uma das grandes estratégias adotadas para o mercado sustentar a
          crise provocada pela pandemia. No episódio de hoje vamos falar sobre
          como ser mais produtivo nessa nova realidade.
        </p>
      </div>
      {openDetail ? (
        <div onClick={() => setOpenDetail(!openDetail)}>fechar</div>
      ) : (
        <div onClick={() => setOpenDetail(!openDetail)}>
          <h3>Ler mais<ArrowIcon/></h3>
          <span>Participante: Thomas do Deskless</span>
        </div>
      )}

    </div>
  );
};
export default PodcastDetail;
