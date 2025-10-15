import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import PageTitle from '@/components/PageTitle';

const Kids4Jesus = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title="Kids 4 Jesus" />
      <Hero 
        title={t('kids4jesus.title')}
        subtitle={t('kids4jesus.subtitle')}
        videoSource="mp4"
        videoUrl="https://video.wixstatic.com/video/021863_c56fc4f169464a208b829299133d4610/1080p/mp4/file.mp4"
        height="min-h-[50vh]"
      />
    </>
  );
};

export default Kids4Jesus; 