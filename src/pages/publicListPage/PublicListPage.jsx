import React from "react";
import Accordeon from "../../components/Accordeon/Accordeon";

function PublicListPage() {
  return (
    <div>
      <div className="privateServiceDisplay">
        {Details.map((card) => {
          return (
            <PrivateServices
              key={card.key}
              nume={card.nume}
              desc={card.desc}
              link={card.link}
              img={card.img}
              location={card.location}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PublicListPage;
