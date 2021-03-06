import React from "react";
import styled from "styled-components";

import ProfileCard from "@furkanyilmazx/components/ProfileCard";
import ProfessionalSummary from "@furkanyilmazx/components/ProfessionalSummary";
import WorkExperience from "@furkanyilmazx/components/WorkExperience";
import Education from "@furkanyilmazx/components/Education";
import Skills from "@furkanyilmazx/components/Skills";
import Languages from "@furkanyilmazx/components/Languages";
import AwardsAndCompetitions from "@furkanyilmazx/components/AwardsAndCompetitions";
import GithubRepos from "@furkanyilmazx/components/GithubRepos";
import DefaultLayout from "@furkanyilmazx/layouts/DefaultLayout";

import media from "@furkanyilmazx/helpers/media";

function ResumePage({ name }) {
  return (
    <DefaultLayout>
      <Container>
        <ProfileCard />
        <RightContent>
          <ProfessionalSummary />
          <WorkExperience />
          <Education />
          <Skills />
          <Languages />
          <AwardsAndCompetitions />
          <GithubRepos />
        </RightContent>
      </Container>
    </DefaultLayout>
  );
}

export default ResumePage;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RightContent = styled.div`
  margin-left: 20px;
  padding: 20px;
  flex: 1;

  ${media.sm`
    margin-left: 0;
  `}
`;
