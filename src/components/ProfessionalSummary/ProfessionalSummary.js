import React from "react";
import styled from "styled-components";

import Title from "@furkanyilmazx/components/Title";
import Text from "@furkanyilmazx/components/Text";

function ProfessionalSummary({ name }) {
  return (
    <Wrapper>
      <Title textId="profSummary" />
      <Text
        align="justify"
        textId="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis mauris
        consequat nibh euismod suspendisse nunc netus dapibus. Pellentesque dui
        urna, ullamcorper tempus convallis. Aliquet tellus integer faucibus elit
        blandit consectetur ac. Parturient fermentum leo maecenas lorem orci
        natoque sed. Auctor placerat lectus pretium dignissim ac quam. Lectus
        ornare sit ullamcorper quam amet. Neque feugiat malesuada euismod
        sodales scelerisque habitant cras aliquet tellus. Quam rutrum velit nisl
        tincidunt. Ut dictumst tincidunt sollicitudin pellentesque aliquam
        faucibus nisl morbi gravida. Mattis iaculis molestie morbi elementum mi.
        Fermentum, magnis nisi, placerat netus aliquet id varius est. Bibendum
        sagittis senectus molestie euismod eget. Consectetur nisl, tempus
        pellentesque fermentum sit neque blandit dui sed. Tempor orci,
        consequat, sit ultricies. Id dolor."
      />
    </Wrapper>
  );
}

export default ProfessionalSummary;

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
