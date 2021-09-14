import customAxios from "./customAxios";

export const getCampaignData = async () => {
  const url = `/campaignCountInfo.json`;
  const { data } = await customAxios.get(url);

  return data;
};

export const getCampaignList = async () => {
  const url = `/campaignInfo.json`;
  const { data } = await customAxios.get(url);
  return data;
};
