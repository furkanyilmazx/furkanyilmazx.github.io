import React from "react";
import styled from "styled-components";

import {
  GithubRepoIcon,
  GithubStarIcon,
  GithubForkIcon,
} from "../../assets/icons";

import GITHUB_LANGUAGES_COLORS from "../../constants/githubLanguageColors";

function GithubRepoCard({
  name,
  description,
  language,
  starCount,
  forkCount,
  repoUrl,
}) {
  return (
    <Wrapper>
      <TitleWrapper>
        <GithubRepoIconStyled width={16} height={16} />
        <Title href={repoUrl} target="_blank">
          {name}
        </Title>
      </TitleWrapper>
      <Description>{description}</Description>
      <Footer>
        {language && (
          <Link>
            <Dot color={GITHUB_LANGUAGES_COLORS[language]} />
            <Language>{language}</Language>
          </Link>
        )}
        <Link href={`${repoUrl}/stargazers`} target="_blank">
          <GithubStarIcon width={14} height={16} />
          <Counter>{starCount}</Counter>
        </Link>
        <Link href={`${repoUrl}/network/members`} target="_blank">
          <GithubForkIcon width={14} height={16} />
          <Counter>{forkCount}</Counter>
        </Link>
      </Footer>
    </Wrapper>
  );
}

export default GithubRepoCard;

const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.dividerColor};
  font-size: 14px;
  width: 310px;
  margin: 8px;
  border-radius: 4px;

  & * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  }

  svg {
    fill: ${(props) => props.theme.iconColor};
    path {
      fill: ${(props) => props.theme.iconColor};
    }
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const GithubRepoIconStyled = styled(GithubRepoIcon)`
  margin-right: 8px;
`;

const Title = styled.a`
  color: ${(props) => props.theme.primaryColor};
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  margin-bottom: 16px;
  font-size: 12px;
  color: ${(props) => props.theme.primaryColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  min-height: 12px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  height: 14px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 16px;
`;

const Counter = styled.p`
  color: ${(props) => props.theme.primaryColor};
  margin-left: 3px;
`;

const Dot = styled.span`
  height: 12px;
  width: 12px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
`;

const Language = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-size: 12px;
`;
