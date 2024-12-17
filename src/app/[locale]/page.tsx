import { useTranslations } from 'next-intl';
import { BlockTitle } from '@/app/[locale]/components/block-title';
import { BlockContent } from '@/app/[locale]/components/block-content';
import CookieConsentBanner from '@/app/[locale]/components/cookie-consent-banner';

export default function Index() {
  const t = useTranslations('Index');

  return (
    <div className='border-b'>
      <div className='container flex flex-col gap-4 sm:gap-8 py-6'>
        {/* Main Block Start */}
        <div>
          <h1 className='text-6xl leading-tight font-semibold mb-2'>
            {t('personal.myFirstName')} {t('personal.mySecondName')}
          </h1>
          <div className='text-3xl text-muted-foreground'>
            {t('personal.myDreamPosition')}
          </div>
        </div>
        {/* Main Block End */}
        {/* Blocks Container Start */}
        <div className='flex flex-col md:flex-row gap-12 md:gap-16'>
          {/* Big Blocks Container Start */}
          <div className='w-full md:w-3/5 lg:w-3/4 flex flex-col gap-12'>
            <div id='about'>{t('personal.myDreamPositionDesc')}</div>
            <div id='personal_mobile' className='md:hidden'>
              <BlockTitle title={t('personal.title')} />
              <div className='flex flex-col gap-2'>
                <BlockContent
                  variant={2}
                  listTitle={t('personal.myEmail.title')}
                  text={t('personal.myEmail.data')}
                />
                <BlockContent
                  variant={21}
                  listTitle={t('personal.myPhone.title')}
                  text={t('personal.myPhone.data')}
                />
              </div>
            </div>
            <div id='experience'>
              <BlockTitle title={t('experience.title')} />
              <div className='flex flex-col gap-10'>
                <BlockContent
                  variant={1}
                  dateStart={t('experience.positionItems.item_4.dateStart')}
                  dateEnd={t('experience.positionItems.item_4.dateEnd')}
                  position={t('experience.positionItems.item_4.position')}
                  place={t('experience.positionItems.item_4.place')}
                  listTitle={t('experience.positionItems.item_4.listTitle')}
                  listItem_1={t(
                    'experience.positionItems.item_4.listItems.listItem_1'
                  )}
                  listItem_2={t(
                    'experience.positionItems.item_4.listItems.listItem_2'
                  )}
                  listItem_3={t(
                    'experience.positionItems.item_4.listItems.listItem_3'
                  )}
                  listItem_4={t(
                    'experience.positionItems.item_4.listItems.listItem_4'
                  )}
                  listItem_5={t(
                    'experience.positionItems.item_4.listItems.listItem_5'
                  )}
                />
                <BlockContent
                  variant={1}
                  dateStart={t('experience.positionItems.item_3.dateStart')}
                  dateEnd={t('experience.positionItems.item_3.dateEnd')}
                  position={t('experience.positionItems.item_3.position')}
                  place={t('experience.positionItems.item_3.place')}
                  listTitle={t('experience.positionItems.item_3.listTitle')}
                  listItem_1={t(
                    'experience.positionItems.item_3.listItems.listItem_1'
                  )}
                  listItem_2={t(
                    'experience.positionItems.item_3.listItems.listItem_2'
                  )}
                  listItem_3={t(
                    'experience.positionItems.item_3.listItems.listItem_3'
                  )}
                />
                <BlockContent
                  variant={1}
                  dateStart={t('experience.positionItems.item_2.dateStart')}
                  dateEnd={t('experience.positionItems.item_2.dateEnd')}
                  position={t('experience.positionItems.item_2.position')}
                  place={t('experience.positionItems.item_2.place')}
                  listTitle={t('experience.positionItems.item_2.listTitle')}
                  listItem_1={t(
                    'experience.positionItems.item_2.listItems.listItem_1'
                  )}
                  listItem_2={t(
                    'experience.positionItems.item_2.listItems.listItem_2'
                  )}
                  listItem_3={t(
                    'experience.positionItems.item_2.listItems.listItem_3'
                  )}
                  listItem_4={t(
                    'experience.positionItems.item_2.listItems.listItem_4'
                  )}
                />
                <BlockContent
                  variant={1}
                  dateStart={t('experience.positionItems.item_1.dateStart')}
                  dateEnd={t('experience.positionItems.item_1.dateEnd')}
                  position={t('experience.positionItems.item_1.position')}
                  place={t('experience.positionItems.item_1.place')}
                  listTitle={t('experience.positionItems.item_1.listTitle')}
                  listItem_1={t(
                    'experience.positionItems.item_1.listItems.listItem_1'
                  )}
                  listItem_2={t(
                    'experience.positionItems.item_1.listItems.listItem_2'
                  )}
                />
              </div>
            </div>
            <div id='education'>
              <BlockTitle title={t('education.title')} />
              <div className='flex flex-col gap-10'>
                <BlockContent
                  variant={1}
                  dateStart={t('education.positionItems.item_1.dateStart')}
                  dateEnd={t('education.positionItems.item_1.dateEnd')}
                  position={t('education.positionItems.item_1.position')}
                  place={t('education.positionItems.item_1.place')}
                  listTitle={t('education.positionItems.item_1.listTitle')}
                  listItem_1={t(
                    'education.positionItems.item_1.listItems.listItem_1'
                  )}
                  listItem_2={t(
                    'education.positionItems.item_1.listItems.listItem_2'
                  )}
                  listItem_3={t(
                    'education.positionItems.item_1.listItems.listItem_3'
                  )}
                  listItem_4={t(
                    'education.positionItems.item_1.listItems.listItem_4'
                  )}
                />
              </div>
            </div>
          </div>
          {/* Big Blocks Container End */}
          {/* Small Blocks Container Start */}
          <div className='w-full md:w-2/5 lg:w-1/4 flex flex-col gap-12'>
            <div id='personal' className='hidden md:block'>
              <BlockTitle title={t('personal.title')} />
              <div className='flex flex-col gap-2'>
                <BlockContent
                  variant={2}
                  listTitle={t('personal.myEmail.title')}
                  text={t('personal.myEmail.data')}
                />
                <BlockContent
                  variant={21}
                  listTitle={t('personal.myPhone.title')}
                  text={t('personal.myPhone.data')}
                />
              </div>
            </div>
            <div id='skills_1'>
              <BlockTitle title={t('skills_1.title')} />
              <div className='flex flex-col gap-2'>
                <BlockContent
                  variant={3}
                  skillText={t('skills_1.skillItems.skillItem_1.data')}
                  skillStars={t('skills_1.skillItems.skillItem_1.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_1.skillItems.skillItem_2.data')}
                  skillStars={t('skills_1.skillItems.skillItem_2.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_1.skillItems.skillItem_3.data')}
                  skillStars={t('skills_1.skillItems.skillItem_3.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_1.skillItems.skillItem_4.data')}
                  skillStars={t('skills_1.skillItems.skillItem_4.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_1.skillItems.skillItem_5.data')}
                  skillStars={t('skills_1.skillItems.skillItem_5.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_1.skillItems.skillItem_6.data')}
                  skillStars={t('skills_1.skillItems.skillItem_6.stars')}
                />
              </div>
            </div>
            <div id='skills_2'>
              <BlockTitle title={t('skills_2.title')} />
              <div className='flex flex-col gap-2'>
                <BlockContent
                  variant={3}
                  skillText={t('skills_2.skillItems.skillItem_1.data')}
                  skillStars={t('skills_2.skillItems.skillItem_1.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_2.skillItems.skillItem_2.data')}
                  skillStars={t('skills_2.skillItems.skillItem_2.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_2.skillItems.skillItem_3.data')}
                  skillStars={t('skills_2.skillItems.skillItem_3.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_2.skillItems.skillItem_4.data')}
                  skillStars={t('skills_2.skillItems.skillItem_4.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_2.skillItems.skillItem_5.data')}
                  skillStars={t('skills_2.skillItems.skillItem_5.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_2.skillItems.skillItem_6.data')}
                  skillStars={t('skills_2.skillItems.skillItem_6.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_2.skillItems.skillItem_7.data')}
                  skillStars={t('skills_2.skillItems.skillItem_7.stars')}
                />
              </div>
            </div>
            <div id='skills_3'>
              <BlockTitle title={t('skills_3.title')} />
              <div className='flex flex-col gap-2'>
                <BlockContent
                  variant={3}
                  skillText={t('skills_3.skillItems.skillItem_1.data')}
                  skillStars={t('skills_3.skillItems.skillItem_1.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_3.skillItems.skillItem_2.data')}
                  skillStars={t('skills_3.skillItems.skillItem_2.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_3.skillItems.skillItem_3.data')}
                  skillStars={t('skills_3.skillItems.skillItem_3.stars')}
                />
                <BlockContent
                  variant={3}
                  skillText={t('skills_3.skillItems.skillItem_4.data')}
                  skillStars={t('skills_3.skillItems.skillItem_4.stars')}
                />
              </div>
            </div>
            <div id='interests'>
              <BlockTitle title={t('interests.title')} />
              <div className='flex flex-col gap-3'>
                <BlockContent variant={4} text={t('interests.text')} />
              </div>
            </div>
          </div>
          {/* Small Blocks Container End */}
        </div>
        {/* Blocks Container End */}
        <div id='legal' className='text-sm text-muted-foreground mt-12 mb-8'>
          {t('personal.legal')}
        </div>
      </div>
      <CookieConsentBanner
        text={t('cookies.text')}
        acceptButtonText={t('cookies.acceptButtonText')}
        rejectButtonText={t('cookies.rejectButtonText')}
      />
    </div>
  );
}
