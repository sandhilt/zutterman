import { Container, Description, GroupText, Title } from './styles';

interface SectionProps {
  title: string[];
  description?: string[];
  foregroundColor: string;
  titleColor?: string;
  descriptionColor?: string;
  backgroundImage: string;
}

function Section({
  title,
  description,
  foregroundColor,
  backgroundImage,
  titleColor,
  descriptionColor,
}: SectionProps): JSX.Element {
  return (
    <Container {...{ foregroundColor, backgroundImage }}>
      <GroupText>
        <span>
          {title.map((item, index) => (
            <Title textColor={titleColor} key={index}>
              {item}
            </Title>
          ))}
        </span>
        {description && (
          <span>
            {description.map((item, index) => (
              <Description textColor={descriptionColor} key={index}>
                {item}
              </Description>
            ))}
          </span>
        )}
      </GroupText>
    </Container>
  );
}

export default Section;
