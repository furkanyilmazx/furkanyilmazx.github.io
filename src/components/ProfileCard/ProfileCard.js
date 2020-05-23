import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import ProfileImage from "@furkanyilmazx/assets/images/ProfileImage.png";
import {
  EmailIcon,
  LocationIcon,
  WorkIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@furkanyilmazx/assets/icons";
import Divider from "@furkanyilmazx/components/Divider";

import media from "@furkanyilmazx/helpers/media";

import ResumePdfFile from "@furkanyilmazx/assets/pdfs/resume-pdf.pdf";

function ProfileCard() {
  const { t } = useTranslation();
  return (
    <ProfileCardWrapper>
      <ProfileCardImage src={ProfileImage} />
      <ProfileName>Furkan YILMAZ</ProfileName>
      <ProfileUserTitle>{t("workTitle.software.engineer")}</ProfileUserTitle>
      <ProfileUserStatusContainer>
        <Divider />
        <EmailIcon />
        <ProfileUserStatusItem>furkanyilmazx@gmail.com</ProfileUserStatusItem>
        <Divider />
        <LocationIcon />
        <ProfileUserStatusItem>Istanbul, TR</ProfileUserStatusItem>
        <Divider />
        <WorkIcon />
        <ProfileUserStatusItem>
          {t("workStatus.fullTime")}
        </ProfileUserStatusItem>
        <Divider />
      </ProfileUserStatusContainer>
      <DownloadButton href={ResumePdfFile} target="_blank">
        {t("download")}
      </DownloadButton>
      <SocialIconsWrapper>
        <SocialIcon target="_blank" href="https://github.com/furkanyilmazx">
          <GithubIcon />
        </SocialIcon>
        <SocialIcon
          target="_blank"
          href="https://www.linkedin.com/in/furkanyilmazx/"
        >
          <LinkedinIcon />
        </SocialIcon>
        <SocialIcon target="_blank" href="https://www.instagram.com/furkanyx">
          <InstagramIcon />
        </SocialIcon>
      </SocialIconsWrapper>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;

const ProfileCardWrapper = styled.div`
  padding: 20px;
  max-width: 276px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.sm`
    max-width: none;
    width: 100%;
  `}
`;

const ProfileCardImage = styled.img`
  border-radius: 50%;
  ${media.sm`
    width: 114px;
  `}
`;

const ProfileName = styled.div`
  width: 100%;
  max-width: 141px;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  font-size: 28px;
  font-weight: 800;
  line-height: 1.2;
  margin-top: 20px;

  ${media.sm`
    font-size: 32px;
  `}

`;

const ProfileUserTitle = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;

  ${media.sm`
    font-size: 18px;
  `}
`;

const ProfileUserStatusContainer = styled.div`
  margin-top: 30px;
  width: 100%;

  svg {
    path {
      fill: ${(props) => props.theme.iconColor};
    }
  }
`;
const ProfileUserStatusItem = styled.div`
  margin: 7px;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.primaryColor};
`;

const DownloadButton = styled.a`
  width: 100%;
  color: white;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  border-radius: 9px;
  padding: 10px;
  background: ${(props) => props.theme.downloadButtonBgColor};
  margin-top: 30px;
`;

const SocialIconsWrapper = styled.div`
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  margin-left: 20px;
  svg {
    path {
      fill: ${(props) => props.theme.iconColor};
    }
  }
`;
