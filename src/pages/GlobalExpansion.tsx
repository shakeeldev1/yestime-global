import GlobalExpansionHero from "../components/GlobalExpansioncomponent/GlobalExpansionHero";
import GlobalImpact from "../components/GlobalExpansioncomponent/GlobalImpact";
import GlobalJourney from "../components/GlobalExpansioncomponent/GlobalJourney";
import GlobalPartnershipCTA from "../components/GlobalExpansioncomponent/GlobalPartnershipCTA";
import WhatWeDoGlobally from "../components/GlobalExpansioncomponent/WhatWeDoGlobally";

const GlobalExpansion = () => {
  return (
    <main className="global-expansion-page">
      <GlobalExpansionHero />
      <GlobalImpact/>
      <WhatWeDoGlobally/>
      <GlobalJourney/>
      <GlobalPartnershipCTA/>
    </main>
  );
};

export default GlobalExpansion;