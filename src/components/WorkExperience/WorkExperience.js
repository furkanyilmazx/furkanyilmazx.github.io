import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Divider from "@furkanyilmazx/components/Divider";

import media from "@furkanyilmazx/helpers/media";

import WorkExperienceItem from "./WorkExperience.Item";

function WorkExperience() {
  return (
    <Wrapper>
      <Title textId="workExp" />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="iyzico"
        location="Istanbul, TR"
        workStatus="workStatus.fullTime"
        workingDate="April 08, 2019 - present"
        workDescription="I am using so many technologies, tools and programming languages such as Javascript, NodeJS, ExpressJS, ReactJS, Redux/Saga, React Native, Styled Components, GraphQL, MongoDB, Java, Springboot. I am working frontend focused."
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="Huawei Technologies Co., Ltd"
        location="Istanbul, TR"
        workStatus="workStatus.fullTime"
        workingDate="Jan 15, 2018 - April 08, 2019"
        workDescription="I worked on IOC (Intelligence Operations Center), Universal and TAT(Test Automation Tool) and i used many technologies, tools and programming languages such as Javascript, ReactJS, React Native, Java, Springboot, Docker/Swarm, Python, Django, C++, JNI(Java Native Interface), Kafka, Ant Design(UI Library), SCSS. I worked frontend focused."
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.hardware.engineer"
        company="Yonga Technology Microelectronics"
        location="Istanbul, TR"
        workStatus="workStatus.fullTime"
        workingDate="Sep 15, 2017 - Jan 15, 2018"
        workDescription="I designed and implemented H264 Codec IP Core on Altera FPGA. I used Verilog and VHDL hardware design language when design and implement."
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="C Tech Information Technologies"
        location="Istanbul, TR"
        workStatus="workStatus.intern"
        workingDate="May 01, 2017 - Sep 15, 2017"
        workDescription="I worked on modeo live, modeo core ve mobiot projects. I used C/C++, PHP, Codeigniter (PHP Framework), Bootstrap 3, Python, Python Websocket Library and FFMPEG. I worked as full-stack developer."
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.software.engineer"
        company="EraTek Electronic"
        location="Izmit, TR"
        workStatus="workStatus.intern"
        workingDate="Jul 01, 2015 - Apr 10, 2016"
      />
      <StyledDivider />
      <WorkExperienceItem
        workTitle="workTitle.game.developer"
        company="Etkasoft"
        location="Izmit, TR"
        workStatus="workStatus.intern"
        workingDate="Jul 04, 2014 - Aug 27, 2014"
        workDescription="I joined Game Camp 2014 team. And we developed 2D Mobile game called 'Finding Freebird'. I used Unity3D (C# as scripting language) and Parse (mobile backend as a service)."
        projectLink="https://play.google.com/store/apps/details?id=com.etkasoft.gc2014&hl=tr"
      />
      <Divider />
    </Wrapper>
  );
}

export default WorkExperience;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const StyledDivider = styled(Divider)`
  margin-bottom: 30px;

  ${media.sm`
    margin-bottom: 20px;
  `}
`;
