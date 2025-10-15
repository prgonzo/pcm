import { useEffect } from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Praise Chapel Ministries`;
  }, [title]);

  return null;
};

export default PageTitle; 