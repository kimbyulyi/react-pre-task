import React, { useContext, useEffect, useState } from "react";
import { CampaignContext } from "@contexts/campaignContext";
import { CardList } from "./CardList";
import { CampaignTable } from "./CampaignTable";
import { Title, Pagination } from "@components/Common";
import { CampaignTemplate } from "./style";

export function Campaign(): JSX.Element {
  const { fetchCampaignData, limit, list, handleCurrPage, page } =
    useContext(CampaignContext);

  useEffect(() => {
    fetchCampaignData();
  }, []);

  return (
    <CampaignTemplate>
      <Title type="big" text="캠페인 관리" />
      <CardList />
      <CampaignTable />
      <Pagination
        limitPage={limit}
        totalPageLength={list.length}
        currentPage={page}
        onPageChange={(pageNum: number) => handleCurrPage(pageNum)}
      />
    </CampaignTemplate>
  );
}
