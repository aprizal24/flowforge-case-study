import { FlowForgeHero } from "@/components/sections/FlowForgeHero";
import { FlowForgeAbout } from "@/components/sections/FlowForgeAbout";
import { FlowForgeDesignProcess } from "@/components/sections/FlowForgeDesignProcess";
import { FlowForgePersona } from "@/components/sections/FlowForgePersona";
import { FlowForgeWireframe } from "@/components/sections/FlowForgeWireframe";
import { FlowForgeUIDesign } from "@/components/sections/FlowForgeUIDesign";
import { FlowForgeSmartWorkspace } from "@/components/sections/FlowForgeSmartWorkspace";
import { FlowForgeOutcome } from "@/components/sections/FlowForgeOutcome";
import { FlowForgeUserFlow } from "@/components/sections/FlowForgeUserFlow";

export default function Home() {
  return (
    <>
      <FlowForgeHero />
      <FlowForgeAbout />
      <FlowForgeDesignProcess />
      <FlowForgePersona />
      <FlowForgeUserFlow />
      <FlowForgeWireframe />
      <FlowForgeUIDesign />
      <FlowForgeSmartWorkspace />
      <FlowForgeOutcome />
    </>
  );
}
