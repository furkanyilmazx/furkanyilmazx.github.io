import React, { useEffect, useState } from "react";
import styled from "styled-components";

import furkanyilmazxGithubRepos from "@furkanyilmazx/constants/githubReposFurkanyilmazx";
import Title from "@furkanyilmazx/components/Title";
import GithubRepoCard from "@furkanyilmazx/components/GithubRepoCard";

function GithubRepos(params) {
  const [repos, setRepos] = useState(furkanyilmazxGithubRepos);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/furkanyilmazx/repos?type=owner&sort=updated"
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        if (myJson.message) return;
        const sortedAsStar = myJson.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sortedAsStar);
      });
  }, []);

  return (
    <Container>
      <Title textId="openSourceProject" />
      {repos && (
        <GithubReposContainer>
          {repos.map(
            ({
              id,
              full_name,
              description,
              language,
              stargazers_count,
              forks,
              html_url,
              name,
            }) => {
              return (
                <GithubRepoCard
                  key={id}
                  name={name}
                  title={full_name}
                  description={description}
                  language={language}
                  starCount={stargazers_count}
                  forkCount={forks}
                  repoUrl={html_url}
                />
              );
            }
          )}
        </GithubReposContainer>
      )}
    </Container>
  );
}

export default GithubRepos;

const Container = styled.div`
  font-size: 14px;
  width: 100%;
`;

const GithubReposContainer = styled.div`
  font-size: 14px;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
`;
