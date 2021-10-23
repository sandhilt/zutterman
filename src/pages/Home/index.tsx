import firstMetric from '../../assets/images/metric-1.png';
import secondMetric from '../../assets/images/metric-2.png';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Section from '../../components/Section';
import { themeDefault } from '../../styles/theme';

function Home(): JSX.Element {
  return (
    <main>
      <Navbar />
      <Section
        backgroundImage={firstMetric}
        foregroundColor={themeDefault.greyColor}
        titleColor={themeDefault.lightBrownColor}
        title={['Measuring', 'everything']}
      ></Section>
      <Section
        backgroundImage={secondMetric}
        foregroundColor={themeDefault.blueNavyColor}
        descriptionColor={themeDefault.lightColor}
        titleColor={themeDefault.lightColor}
        title={['We are Leader', 'in Measure Tapes']}
        description={[
          'There are 5x the',
          'circumference of planet',
          'earth in metric tapes.',
        ]}
      ></Section>
      <Footer />
    </main>
  );
}

export default Home;
