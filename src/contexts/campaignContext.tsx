import React, { createContext, ReactNode, useMemo, useState } from "react";
import { getCampaignData, getCampaignList } from "@lib/api/campaign";
import {
  ICampaignProviderProps,
  ICampaignList,
  ICampaignStatus,
} from "@src/types/campaign.types";

export const INITIAL_STATUS = {
  ongoing: 0,
  completed: 0,
  registered: 0,
  selected: 0,
  reports: 0,
};

export const INITIAL_PAGE = 1;
export const INITIAL_PAGE_LIMIT = 10;

const CampaignContext = createContext<ICampaignProviderProps>({
  list: [],
  status: INITIAL_STATUS,
  page: INITIAL_PAGE,
  limit: INITIAL_PAGE_LIMIT,
  currentCampaignList: [],
  handleCurrPage: (pageNum: number) => {},
  fetchCampaignData: () => {},
});

const CampaignProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | ReactNode;
}): JSX.Element => {
  const [list, setList] = useState<ICampaignList[]>([]);
  const [status, setStatus] = useState<ICampaignStatus>(INITIAL_STATUS);
  const [page, setPage] = useState<number>(INITIAL_PAGE);
  const [limit, setLimit] = useState<number>(INITIAL_PAGE_LIMIT);

  const fetchCampaignData = async () => {
    const { data: campaignList } = await getCampaignList();
    const { data: campaignStatus } = await getCampaignData();

    setList(campaignList);
    setStatus({
      ...status,
      ongoing: campaignStatus.campaigns.status.ongoing,
      completed: campaignStatus.campaigns.status.completed,
      registered: campaignStatus.campaigns.status.registered,
      selected: campaignStatus.influencers.status.selected,
      reports: campaignStatus.reports,
    });
  };

  const currentCampaignList = useMemo(() => {
    const firstPageIndex = (page - 1) * limit;
    const lastPageIndex = firstPageIndex + limit;
    const currList = list?.slice(firstPageIndex, lastPageIndex);

    return currList;
  }, [list, page]);

  const handleCurrPage = (pageNum: number) => {
    setPage(pageNum);
  };

  const initialValue = {
    list,
    status,
    page,
    limit,
    currentCampaignList,
    handleCurrPage,
    fetchCampaignData,
  };

  return (
    <CampaignContext.Provider value={initialValue}>
      {children}
    </CampaignContext.Provider>
  );
};

export { CampaignProvider, CampaignContext };
