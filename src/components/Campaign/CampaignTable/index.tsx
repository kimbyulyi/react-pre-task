import React, { useContext } from "react";
import { CampaignContext } from "@contexts/campaignContext";
import { ICampaignType } from "@src/types/campaign.types";
import { BlogIcon, InstaIcon } from "@components/Common/Icon";
import { Button } from "@components/Common";
import { table } from "./style";

export const CampaignTable = (): JSX.Element => {
  const { list, currentCampaignList } = useContext(CampaignContext);

  return (
    <table css={table}>
      <thead className="table__thead">
        <tr>
          <th className="table__cols3">캠페인</th>
          <th className="table__cols2">캠페인 유형</th>
          <th>인플루언서</th>
          <th>모집</th>
          <th>등록 콘텐츠</th>
          <th>보고서</th>
        </tr>
      </thead>
      <tbody>
        {currentCampaignList?.map(
          (item: {
            title: string;
            type: ICampaignType;
            reqruitCounts: number;
            _id: string;
          }) => {
            const { title, type, reqruitCounts, _id } = item;
            return (
              <tr key={_id} className="table__body">
                <td className="table__cols3">{title}</td>
                <td className="table__cols2 table__body--type">
                  {type.text === "instagram" ? (
                    <InstaIcon />
                  ) : (
                    <BlogIcon width="2em" height="2em" />
                  )}
                  {type.text}
                </td>
                <td>
                  <Button colorType="black" text="선발하기" />
                </td>
                <td>{reqruitCounts}명</td>
                <td>
                  <Button colorType="default" text="확인" />
                </td>
                <td>
                  <Button colorType="default" text="확인" />
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};
