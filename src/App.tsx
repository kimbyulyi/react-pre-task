import React from "react";
import { Global } from "@emotion/react";
import { GlobalStyles } from "@styles/global";
import { Campaign } from "@components/Campaign";
import { CampaignProvider } from "./contexts/campaignContext";

const App = (): JSX.Element => {
  return (
    <CampaignProvider>
      <Global styles={GlobalStyles} />
      <Campaign />
    </CampaignProvider>
  );
};

export default App;
