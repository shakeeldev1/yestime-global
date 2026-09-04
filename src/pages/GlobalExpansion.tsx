import GlobalExpansionHero from "../components/GlobalExpansioncomponent/GlobalExpansionHero";
import GlobalImpact from "../components/GlobalExpansioncomponent/GlobalImpact";
import GlobalJourney from "../components/GlobalExpansioncomponent/GlobalJourney";
import WhatWeDoGlobally from "../components/GlobalExpansioncomponent/WhatWeDoGlobally";

const GlobalExpansion = () => {
  return (
    <main className="global-expansion-page min-h-screen overflow-hidden bg-white text-[#000000]">
      <GlobalExpansionHero />
      <GlobalImpact />
      <WhatWeDoGlobally />
      <GlobalJourney />
    </main>
  );
};

export default GlobalExpansion;