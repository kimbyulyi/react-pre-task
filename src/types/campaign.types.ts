export interface ICampaignType {
  text: string;
}

export interface ICampaignList {
  _id: string;
  title: string;
  reqruitCounts: number;
  type: ICampaignType;
}

export interface ICampaignCount {
  status: {
    completed: number;
    ongoing: number;
    registered: number;
  };
}

export interface IInfluencerCount {
  status: {
    selected: number;
  };
}

export interface ICampaignStatus {
  ongoing: number;
  completed: number;
  registered: number;
  selected: number;
  reports: number;
}

export interface ICampaignProviderProps {
  list: ICampaignList[];
  status: ICampaignStatus;
  page: number;
  limit: number;
  currentCampaignList: ICampaignList[];
  handleCurrPage: (pageNum: number) => void;
  fetchCampaignData: () => void;
}
