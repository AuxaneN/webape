import React from 'react'
import CardWrapper from "./cardWrapper"
import CardContainer from './cardContainer'

import SinglePriceCard from './singlePriceCard'

const PriceCards = () => (
<CardWrapper elements="3">
  <CardContainer>
      <SinglePriceCard 
      title="Site statique" 
      description="Vous recherchez une solution simple pour la création d'un site dont le contenu ne changera pas ou peu." 
      price="400€"
      subject="Demande de devis pour site statique"
      />
  </CardContainer>
  
  <CardContainer>
    <SinglePriceCard 
      title="Site Wordpress React" 
      description="Vous souhaitez alimenter un site avec du nouveau contenu régulièrement. Une solution plus flexible qu'un Wordpress de base." 
      price="200€/ jour"
      subject="Demande de devis pour site wordpress React"

    />
  </CardContainer>

  <CardContainer>
        <SinglePriceCard 
        title="Web App" 
        description="Vous souhaitez mettre au point un site web avec des fonctionnalités complexes." 
        price="250€/ jour"
       subject="Demande de devis pour une web app"

        />
  </CardContainer>
</CardWrapper>

)

export default PriceCards