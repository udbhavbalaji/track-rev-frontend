import ContentSection from "@components/ContentSection";
import FooterNote from "@components/FooterNote";
import Navbar from "@components/Navbar";

export interface AppLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  title,
  children,
}: AppLayoutProps) => {
  return (
    <div className='bg-gray-900 text-stone-100 w-full font-regularFont'>
      <Navbar />
      <ContentSection title={title ?? "TrackRev"}>
        {children ?? <></>}
      </ContentSection>
      <FooterNote className='text-xs mt-6' />
    </div>
  );
};

export default AppLayout;
