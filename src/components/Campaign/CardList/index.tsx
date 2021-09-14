import React, { useContext } from "react";
import { CampaignContext } from "@contexts/campaignContext";
import { Card } from "@components/Common/Card";
import { CampaignCardList } from "./style";

export function CardList(): JSX.Element {
  const { status } = useContext(CampaignContext);

  return (
    <CampaignCardList>
      {status && (
        <>
          <Card title="진행중인 캠페인" total={status.ongoing} type="count" />
          <Card title="완료된 캠페인" total={status.completed} type="count" />
          <Card title="등록 콘텐츠" total={status.registered} type="count" />
          <Card title="선발 인플루언서" total={status.selected} type="people" />
          <Card title="보고서" total={status.reports} type="count" />
        </>
      )}
    </CampaignCardList>
  );
}
