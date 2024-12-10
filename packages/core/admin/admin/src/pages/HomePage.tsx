import * as React from 'react';

import {
  Box,
  Button,
  Flex,
  Grid,
  Main,
  Typography,
  Link,
  LinkButton,
  TypographyComponent,
  BoxComponent,
  FlexComponent,
  IconButton,
} from '@strapi/design-system';
import { ArrowRight, ExternalLink, Pencil } from '@strapi/icons';
import {
  CodeSquare,
  Discord,
  Discourse,
  FeatherSquare,
  GitHub,
  InformationSquare,
  PlaySquare,
  Reddit,
  Strapi,
  X as Twitter,
} from '@strapi/icons/symbols';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { ContentBox } from '../components/ContentBox';
import { GuidedTourHomepage } from '../components/GuidedTour/Homepage';
import { useGuidedTour } from '../components/GuidedTour/Provider';
import { Layouts } from '../components/Layouts/Layout';
import { Page } from '../components/PageHelpers';
import { useAppInfo } from '../features/AppInfo';
import { useTracking } from '../features/Tracking';
import { useContentTypes } from '../hooks/useContentTypes';
import { useEnterprise } from '../hooks/useEnterprise';

import cornerOrnamentPath from './assets/corner-ornament.svg';
import cloudIconBackgroundImage from './assets/strapi-cloud-background.png';
import cloudFlagsImage from './assets/strapi-cloud-flags.svg';
import IMAGE_1 from './assets/img1.jpeg';
import IMAGE_2 from './assets/img2.jpeg';
import IMAGE_3 from './assets/img3.jpeg';
import IMAGE_4 from './assets/img4.jpeg';
import IMAGE_5 from './assets/img5.jpeg';
import IMAGE_6 from './assets/img6.svg';
import IMAGE_7 from './assets/img7.svg';
import LINE_IMG from './assets/line.svg';

/* -------------------------------------------------------------------------------------------------
 * HomePageCE
 * -----------------------------------------------------------------------------------------------*/

const HomePageCE = () => {
  const { formatMessage } = useIntl();
  // Temporary until we develop the menu API
  const { collectionTypes, singleTypes, isLoading: isLoadingForModels } = useContentTypes();
  const guidedTourState = useGuidedTour('HomePage', (state) => state.guidedTourState);
  const isGuidedTourVisible = useGuidedTour('HomePage', (state) => state.isGuidedTourVisible);
  const isSkipped = useGuidedTour('HomePage', (state) => state.isSkipped);

  const showGuidedTour =
    !Object.values(guidedTourState).every((section) =>
      Object.values(section).every((step) => step)
    ) &&
    isGuidedTourVisible &&
    !isSkipped;
  const navigate = useNavigate();
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    navigate('/plugins/content-type-builder/content-types/create-content-type');
  };

  const hasAlreadyCreatedContentTypes = collectionTypes.length > 1 || singleTypes.length > 0;

  if (isLoadingForModels) {
    return <Page.Loading />;
  }

  return (
    <Layouts.Root>
      <Page.Title>
        {formatMessage({
          id: 'HomePage.head.title',
          defaultMessage: 'Homepage',
        })}
      </Page.Title>
      <Main>
        <LogoContainer>
          <img alt="" aria-hidden src={cornerOrnamentPath} />
        </LogoContainer>
        <Box padding={10}>
          <Grid.Root position="relative">
            <IconButton
              label={'edit'}
              variant="ghost"
              style={{
                position: 'absolute',
                top: '0',
                background: '#006e61',
                left: '0',
              }}
            >
              <Pencil style={{ color: '#fff', fill: '#fff' }} />
            </IconButton>
            <Grid.Item col={8} s={12} direction="column" alignItems="stretch">
              <div>
                <Box paddingLeft={6} paddingBottom={10}>
                  <Flex direction="column" alignItems="flex-start" gap={5}>
                    <Typography tag="h2" variant="alpha" style={{ color: '#006e61' }}>
                      أهلاً بك في هيئة تطوير وتحسين محافظة الأحساء
                      {/* {hasAlreadyCreatedContentTypes
                        ? formatMessage({
                            id: 'app.components.HomePage.welcome.again',
                            defaultMessage: 'Welcome 👋',
                          })
                        : formatMessage({
                            id: 'app.components.HomePage.welcome',
                            defaultMessage: 'Welcome on board!',
                          })} */}
                    </Typography>
                    <WordWrap textColor="neutral600" variant="epsilon">
                      هيئة تطوير محافظة الأحساء هي هيئة حكومية سعودية تم إنشاؤها بموجب الأمر الملكي
                      رقم (أ/567) بتاريخ 4 شوال 1443هـ الموافق 5 مايو 2022م). تُعنى الهيئة بتطوير
                      محافظة الأحساء لتحقيق التنمية المستدامة، وتحسين جودة الحياة، وتنفيذ مشاريع
                      تنموية متكاملة في مختلف المجالات.
                      {/* {hasAlreadyCreatedContentTypes
                        ? formatMessage({
                            id: 'app.components.HomePage.welcomeBlock.content.again',
                            defaultMessage:
                              'We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback.',
                          })
                        : formatMessage({
                            id: 'app.components.HomePage.welcomeBlock.content',
                            defaultMessage:
                              'Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!',
                          })} */}
                    </WordWrap>
                    {/* {hasAlreadyCreatedContentTypes ? (
                      <Link isExternal href="https://strapi.io/blog">
                        {formatMessage({
                          id: 'app.components.HomePage.button.blog',
                          defaultMessage: 'See more on the blog',
                        })}
                      </Link>
                    ) : (
                      <Button size="L" onClick={handleClick} endIcon={<ArrowRight />}>
                        {formatMessage({
                          id: 'app.components.HomePage.create',
                          defaultMessage: 'Create your first Content type',
                        })}
                      </Button>
                    )} */}
                  </Flex>
                </Box>
              </div>
            </Grid.Item>
          </Grid.Root>
          <Grid.Root style={{ alignItems: 'center' }} gap={6} position="relative">
            <IconButton
              label={'edit'}
              variant="ghost"
              style={{
                position: 'absolute',
                top: '0',
                background: '#006e61',
                left: '0',
              }}
            >
              <Pencil style={{ color: '#fff', fill: '#fff' }} />
            </IconButton>
            <Grid.Item col={5} s={9} direction="column" alignItems="stretch">
              {/* {showGuidedTour ? <GuidedTourHomepage /> : <ContentBlocks />} */}
              <Typography tag="h1" variant="alpha" style={{ color: '#006e61', fontWeight: '900' }}>
                نبذة عن هيئة تطوير الأحساء
              </Typography>
              <Typography
                tag="h2"
                variant="alpha"
                style={{
                  color: '#666687',
                  lineHeight: '1.6',
                  fontWeight: '400',
                }}
              >
                تعمل الهيئة كحلقة وصل بين القطاعات الحكومية والخاصة لتنفيذ المشاريع التنموية. تركز
                على استغلال مقومات الأحساء الزراعية (مثل إنتاج التمور) والسياحية لتحقيق التنمية
                الاقتصادية. تهدف إلى توفير بيئة استثمارية جاذبة تسهم في رفع الناتج المحلي الإجمالي
                للمحافظة.
              </Typography>
            </Grid.Item>
            <Grid.Item col={7} s={12} direction="column" alignItems="stretch">
              {/* <SocialLinks /> */}
              <img src={IMAGE_6} alt="" style={{ maxHeight: '500px' }} />
            </Grid.Item>
          </Grid.Root>
          <img src={LINE_IMG} style={{ margin: '3rem 0' }} alt="" />
          <Grid.Root
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '15rem',
              background: 'linear-gradient(90deg, #0C3B2D 0%, #21A17B 100%)',
              borderRadius: '10px',
              padding: '3rem 3rem 0',
              alignItems: 'center',
            }}
          >
            <IconButton
              label={'edit'}
              variant="ghost"
              style={{
                position: 'absolute',
                top: '0',
                background: '#006e61',
                left: '0',
              }}
            >
              <Pencil style={{ color: '#fff', fill: '#fff' }} />
            </IconButton>
            <Grid.Item col={5} s={9} direction="column" alignItems="stretch">
              {/* {showGuidedTour ? <GuidedTourHomepage /> : <ContentBlocks />} */}
              <Typography
                tag="h1"
                variant="alpha"
                style={{ color: '#fff', fontWeight: '900', marginBottom: '2rem' }}
              >
                سموُّ نائبِ أميرِ المنطقةِ الشرقيَّةِ يترأس الاجتماعَ العاشرَ لمجلسِ إدارةِ هيئةِ
                تطوير الأحساء
              </Typography>
              <Typography
                tag="h2"
                variant="beta"
                style={{
                  color: '#fff',
                  lineHeight: '1.6',
                  fontWeight: '400',
                }}
              >
                ترأسَ صاحب السمو الملكي الأمير سعود بن بندر بن عبدالعزيز نائب أمير المنطقة الشرقية
                رئيس مجلس إدارة هيئة تطوير محافظة الأحساء عبر الاتصال المرئي الاجتماعَ العاشر لمجلس
                إدارة هيئة تطوير الأحساء، بحضور صاحب السمو الملكي الأمير سعود بن طلال بن بدر محافظ
                الأحساء الرئيس التنفيذي المكلف وعدد من أعضاء الهيئة.
              </Typography>
            </Grid.Item>
            <Grid.Item col={7} s={12} direction="column" alignItems="stretch">
              {/* <SocialLinks /> */}
              <img src={IMAGE_7} alt="" style={{ maxHeight: '400px' }} />
            </Grid.Item>
          </Grid.Root>
          <Grid.Root
            style={{
              width: '100%',
              minHeight: '15rem',
              borderRadius: '10px',
              padding: '3rem 3rem 0',
              gap: '2rem',
              marginTop: '1rem',
              position: 'relative',
            }}
          >
            <IconButton
              label={'edit'}
              variant="ghost"
              style={{
                position: 'absolute',
                top: '0',
                background: '#006e61',
                left: '0',
              }}
            >
              <Pencil style={{ color: '#fff', fill: '#fff' }} />
            </IconButton>
            <Grid.Item col={3} s={6} direction="column" alignItems="stretch">
              <img
                src={IMAGE_2}
                alt=""
                width="100%"
                height="100%"
                style={{ borderRadius: '15px' }}
              />
            </Grid.Item>
            <Grid.Item col={3} s={6} direction="column" alignItems="stretch">
              <img
                src={IMAGE_3}
                alt=""
                width="100%"
                height="100%"
                style={{ borderRadius: '15px' }}
              />
            </Grid.Item>
            <Grid.Item col={3} s={6} direction="column" alignItems="stretch">
              <img
                src={IMAGE_4}
                alt=""
                width="100%"
                height="100%"
                style={{ borderRadius: '15px' }}
              />
            </Grid.Item>
            <Grid.Item col={3} s={6} direction="column" alignItems="stretch">
              <img
                src={IMAGE_5}
                alt=""
                width="100%"
                height="100%"
                style={{ borderRadius: '15px' }}
              />
            </Grid.Item>
          </Grid.Root>
          <Box
            style={{
              width: '100%',
              minHeight: '10rem',
              background: 'linear-gradient(90deg, #0C3B2D 0%, #21A17B 100%)',
              borderRadius: '10px',
              padding: '2rem 3rem',
              marginTop: '3rem',
            }}
          >
            <Typography
              tag="h1"
              variant="alpha"
              style={{ color: '#fff', fontWeight: '600', textAlign: 'center', margin: '0 0 2rem' }}
            >
              التحكم في المحتوي
            </Typography>
            <Box
              className="action"
              style={{
                alignItems: 'center',
                gap: '2rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                onClick={() => navigate('/content-manager/collection-types/api::address.address')}
                style={{
                  background: '#006E61',
                  border: '1px solid #006E61',
                  boxShadow: '0 0 10px rgba(0,0,0,.1)',
                }}
                size="L"
              >
                إدارة الوظائف
              </Button>
              <Button
                onClick={() => navigate('/content-manager/collection-types/api::category.category')}
                style={{
                  background: '#006E61',
                  border: '1px solid #006E61',
                  boxShadow: '0 0 10px rgba(0,0,0,.1)',
                }}
                size="L"
              >
                إدارة المناقصات
              </Button>
              <Button
                style={{
                  background: '#006E61',
                  border: '1px solid #006E61',
                  boxShadow: '0 0 10px rgba(0,0,0,.1)',
                }}
                size="L"
              >
                التحكم في وسائل التواصل الإجتماعي
              </Button>
            </Box>
          </Box>
        </Box>
      </Main>
    </Layouts.Root>
  );
};

const LogoContainer = styled<BoxComponent>(Box)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 15rem;
  }
`;

const WordWrap = styled<TypographyComponent>(Typography)`
  word-break: break-word;
`;

/* -------------------------------------------------------------------------------------------------
 * ContentBlocks
 * -----------------------------------------------------------------------------------------------*/

const ContentBlocks = () => {
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();

  return (
    <Flex direction="column" alignItems="stretch" gap={5}>
      <BlockLink
        href="https://cloud.strapi.io"
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={() => {
          trackUsage('didClickOnTryStrapiCloudSection');
        }}
      >
        <Flex
          shadow="tableShadow"
          hasRadius
          padding={6}
          background="neutral0"
          position="relative"
          gap={6}
        >
          <CloudCustomWrapper hasRadius padding={3}>
            <CloudIconWrapper
              width="3.2rem"
              height="3.2rem"
              justifyContent="center"
              hasRadius
              alignItems="center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" fill="none">
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M4.39453 13.8298C1.93859 13.6455 0 11.468 0 8.80884 0 6.0289 2.11876 3.7753 4.73238 3.7753c.46775 0 .91964.07218 1.34638.20664C7.21234 1.62909 9.66469 0 12.5073 0c2.5102 0 4.7161 1.27036 5.9782 3.18766a4.54297 4.54297 0 0 1 .6132-.04144C21.8056 3.14622 24 5.54066 24 8.49436c0 2.89194-2.1036 5.24784-4.7323 5.34504v.0031l-1.8948.278a38.18054 38.18054 0 0 1-11.08354 0l-1.89483-.278v-.0127Z"
                  clipRule="evenodd"
                />
              </svg>
            </CloudIconWrapper>
          </CloudCustomWrapper>
          <Flex gap={1} direction="column" alignItems="start">
            <Typography fontWeight="semiBold" variant="pi" textColor="neutral800">
              {formatMessage({
                id: 'app.components.BlockLink.cloud',
                defaultMessage: 'Strapi Cloud',
              })}
            </Typography>
            <Typography textColor="neutral600">
              {formatMessage({
                id: 'app.components.BlockLink.cloud.content',
                defaultMessage: 'Fully-managed cloud hosting for your Strapi project.',
              })}
            </Typography>
            <Box src={cloudFlagsImage} position="absolute" top={0} right={0} tag="img" />
          </Flex>
        </Flex>
      </BlockLink>
      <BlockLink
        href="https://strapi.io/resource-center"
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={() => trackUsage('didClickonReadTheDocumentationSection')}
      >
        <ContentBox
          title={formatMessage({
            id: 'global.documentation',
            defaultMessage: 'Documentation',
          })}
          subtitle={formatMessage({
            id: 'app.components.BlockLink.documentation.content',
            defaultMessage: 'Discover the essential concepts, guides and instructions.',
          })}
          icon={<InformationSquare />}
          iconBackground="primary100"
        />
      </BlockLink>
      <BlockLink
        href="https://strapi.io/starters"
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={() => trackUsage('didClickonCodeExampleSection')}
      >
        <ContentBox
          title={formatMessage({
            id: 'app.components.BlockLink.code',
            defaultMessage: 'Code example',
          })}
          subtitle={formatMessage({
            id: 'app.components.BlockLink.code.content',
            defaultMessage: 'Learn by using ready-made starters for your projects.',
          })}
          icon={<CodeSquare />}
          iconBackground="warning100"
        />
      </BlockLink>
      <BlockLink
        href="https://strapi.io/blog/categories/tutorials"
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={() => trackUsage('didClickonTutorialSection')}
      >
        <ContentBox
          title={formatMessage({
            id: 'app.components.BlockLink.tutorial',
            defaultMessage: 'Tutorials',
          })}
          subtitle={formatMessage({
            id: 'app.components.BlockLink.tutorial.content',
            defaultMessage: 'Follow step-by-step instructions to use and customize Strapi.',
          })}
          icon={<PlaySquare />}
          iconBackground="secondary100"
        />
      </BlockLink>
      <BlockLink
        href="https://strapi.io/blog"
        target="_blank"
        rel="noopener noreferrer nofollow"
        onClick={() => trackUsage('didClickonBlogSection')}
      >
        <ContentBox
          title={formatMessage({
            id: 'app.components.BlockLink.blog',
            defaultMessage: 'Blog',
          })}
          subtitle={formatMessage({
            id: 'app.components.BlockLink.blog.content',
            defaultMessage: 'Read the latest news about Strapi and the ecosystem.',
          })}
          icon={<FeatherSquare />}
          iconBackground="alternative100"
        />
      </BlockLink>
    </Flex>
  );
};

const BlockLink = styled.a`
  text-decoration: none;
`;

const CloudCustomWrapper = styled<BoxComponent>(Box)`
  background-image: url(${cloudIconBackgroundImage});
`;

const CloudIconWrapper = styled<FlexComponent>(Flex)`
  background: rgba(255, 255, 255, 0.3);
`;

/* -------------------------------------------------------------------------------------------------
 * SocialLinks
 * -----------------------------------------------------------------------------------------------*/

const SocialLinks = () => {
  const { formatMessage } = useIntl();
  const communityEdition = useAppInfo('SocialLinks', (state) => state.communityEdition);

  const socialLinksExtended = [
    ...SOCIAL_LINKS,
    {
      icon: <StyledStrapi />,
      link: communityEdition
        ? 'https://discord.strapi.io'
        : 'https://support.strapi.io/support/home',
      name: {
        id: 'Settings.application.get-help',
        defaultMessage: 'Get help',
      },
    },
  ];

  return (
    <Flex
      tag="aside"
      direction="column"
      aria-labelledby="join-the-community"
      background="neutral0"
      hasRadius
      paddingRight={5}
      paddingLeft={5}
      paddingTop={6}
      paddingBottom={6}
      shadow="tableShadow"
      gap={7}
    >
      <Flex direction="column" alignItems="stretch" gap={5}>
        <Flex direction="column" alignItems="stretch" gap={3}>
          <Typography variant="delta" tag="h2" id="join-the-community">
            {formatMessage({
              id: 'app.components.HomePage.community',
              defaultMessage: 'Join the community',
            })}
          </Typography>
          <Typography textColor="neutral600">
            {formatMessage({
              id: 'app.components.HomePage.community.content',
              defaultMessage:
                'Discuss with team members, contributors and developers on different channels',
            })}
          </Typography>
        </Flex>
        <Link href="https://feedback.strapi.io/" isExternal endIcon={<ExternalLink />}>
          {formatMessage({
            id: 'app.components.HomePage.roadmap',
            defaultMessage: 'See our road map',
          })}
        </Link>
      </Flex>
      <GridGap>
        {socialLinksExtended.map(({ icon, link, name }) => {
          return (
            <Grid.Item col={6} s={12} key={name.id} direction="column" alignItems="stretch">
              <LinkCustom size="L" startIcon={icon} variant="tertiary" href={link} isExternal>
                {formatMessage(name)}
              </LinkCustom>
            </Grid.Item>
          );
        })}
      </GridGap>
    </Flex>
  );
};

const StyledGithub = styled(GitHub)`
  path {
    fill: ${(props) => props.theme.colors.neutral800} !important;
  }
`;

const StyledDiscord = styled(Discord)`
  path {
    fill: #7289da !important;
  }
`;

const StyledReddit = styled(Reddit)`
  > path:first-child {
    fill: #ff4500;
  }

  > path:nth-child(2) {
    fill: #fff;
  }
`;
const StyledStrapi = styled(Strapi)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`;

const StyledTwitter = styled(Twitter)`
  path:first-child {
    fill: #fff;
  }

  path:nth-child(2) {
    fill: #000 !important;
  }
`;

const StyledDiscourse = styled(Discourse)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`;

const LinkCustom = styled(LinkButton)`
  display: flex;
  align-items: center;
  border: none;
  justify-content: left;
  svg {
    width: ${({ theme }) => theme.spaces[6]};
    height: ${({ theme }) => theme.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`;

const GridGap = styled(Grid.Root)`
  row-gap: ${({ theme }) => theme.spaces[2]};
  column-gap: ${({ theme }) => theme.spaces[4]};
`;

const SOCIAL_LINKS = [
  {
    name: { id: 'app.components.HomePage.community.links.github', defaultMessage: 'Github' },
    link: 'https://github.com/strapi/strapi/',
    icon: <StyledGithub />,
    alt: 'github',
  },
  {
    name: { id: 'app.components.HomePage.community.links.discord', defaultMessage: 'Discord' },
    link: 'https://discord.strapi.io/',
    icon: <StyledDiscord />,
    alt: 'discord',
  },
  {
    name: { id: 'app.components.HomePage.community.links.reddit', defaultMessage: 'Reddit' },
    link: 'https://www.reddit.com/r/Strapi/',
    icon: <StyledReddit />,
    alt: 'reddit',
  },
  {
    name: { id: 'app.components.HomePage.community.links.twitter', defaultMessage: 'Twitter' },
    link: 'https://twitter.com/strapijs',
    icon: <StyledTwitter />,
    alt: 'twitter',
  },
  {
    name: { id: 'app.components.HomePage.community.links.forum', defaultMessage: 'Forum' },
    link: 'https://forum.strapi.io',
    icon: <StyledDiscourse />,
    alt: 'forum',
  },
  {
    name: { id: 'app.components.HomePage.community.links.blog', defaultMessage: 'Blog' },
    link: 'https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page',
    icon: <StyledStrapi />,
    alt: 'blog',
  },
  {
    name: {
      id: 'app.components.HomePage.community.links.career',
      defaultMessage: 'We are hiring!',
    },
    link: 'https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog',
    icon: <StyledStrapi />,
    alt: 'career',
  },
];

/* -------------------------------------------------------------------------------------------------
 * HomePage
 * -----------------------------------------------------------------------------------------------*/

const HomePage = () => {
  const Page = useEnterprise(
    HomePageCE,
    // eslint-disable-next-line import/no-cycle
    async () => (await import('../../../ee/admin/src/pages/HomePage')).HomePageEE
  );

  // block rendering until the EE component is fully loaded
  if (!Page) {
    return null;
  }

  return <Page />;
};

export { HomePage, HomePageCE };
