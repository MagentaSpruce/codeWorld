import Head from 'next/head';
import { getFeaturedCourses } from '../helpers/api-util';
import CourseList from '@components/courses/course-list';
import NewsletterRegistration from '@components/input/newsletter-registration';
import Hero from '@components/layout/Hero';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import SectionTwo from '@components/main-page/section-two';
import SectionThree from '@components/main-page/section-three';
import SectionFour from '@components/main-page/section-four';
import SectionFive from '@components/main-page/section-five';
import SectionSix from '@components/main-page/section-six';

function HomePage(props) {
  return (
    <div className="max-w-[1536px]">
      <Head>
        <title>Code 🌎 World</title>

        <meta
          name="Main Page"
          content="Code World main information page for parents and students. Introduces our after school program and coding courses in Bali along with information on registration, class sizes, and more!"
        />
      </Head>

      <Sidebar />
      <Hero />
      <Submenu />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionSix />
      <SectionFive />
      <NewsletterRegistration />
      <div className="hidden">
        <CourseList items={props.courses} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const featuredCourses = await getFeaturedCourses();
  return {
    props: {
      courses: featuredCourses,
    },
    revalidate: 30,
  };
}

export default HomePage;
