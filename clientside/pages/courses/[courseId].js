//This page handles purchases

import { getCourseById, getFeaturedCourses } from '@helpers/api-util';

import CourseSummary from '@components/course-detail/course-summary';
import CourseLogistics from '@components/course-detail/course-logistics';
import CourseContent from '@components/course-detail/course-content';
import Head from 'next/head';
import Comments from '@components/input/comments';
import Sidebar from '@components/layout/Sidebar';
import Submenu from '@components/layout/Submenu';
import { useGlobalContext } from 'store/context';
import Button from '@components/ui/button';
import { checkout } from '@helpers/checkout';
import Link from 'next/link';

function CourseDetailPage(props) {
  const { closeSubmenu } = useGlobalContext();
  const course = props.selectedCourse;
  // console.log(course);
  if (!course) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{course.title}</title>

        <meta
          name="Individual Course page"
          content="Shows all of the information for a specific after school or on the weekend coding course in Bali including registration."
        />
      </Head>
      <Sidebar />
      <Submenu />
      <CourseSummary title={course.title} />
      <div
        onMouseOver={closeSubmenu}
        className="max-w-[1536px]
      md:w-[120%] lg:w-[100%]"
      >
        <CourseLogistics
          age={course.age}
          date={course.date}
          address={course.location}
          image={course.image}
          time={course.time}
        />
        {/* <div
          className="text-center text-2xl
        relative 
        xxxs:top-[6.5rem]
        md:top-14"
        >
          <Button>
            <Link href="/courses">Back to Classes</Link>
          </Button>
        </div> */}
        <CourseContent>
          <div
            className="flex justify-center items-center gap-5
          xxxs:flex-col
          md:flex-row"
          >
            <Button
              quantity={course.quantity}
              onClick={() => {
                if (course.quantity > 0) {
                  checkout({
                    lineItems: [
                      {
                        price: `${
                          course.title === 'React' &&
                          course.date === '2023-02-05'
                            ? 'price_1MKbZLFSa0TezXP7rYSMdrSG'
                            : course.title === 'React' &&
                              course.date === '2023-02-05'
                            ? 'price_1MKbZLFSa0TezXP7rYSMdrSG'
                            : course.title === 'JavaScript' &&
                              course.date === '2023-02-08' &&
                              course.age === 'Ages 9-12'
                            ? 'price_1MKbcrFSa0TezXP7ybjmOBdf'
                            : course.title === 'JavaScript' &&
                              course.date === '2023-02-03' &&
                              course.age === 'Ages 13-16'
                            ? 'price_1MKbdoFSa0TezXP7v7nSRML0'
                            : course.title === 'JavaScript' &&
                              course.date === '2023-02-05' &&
                              course.age === 'Ages 13-16'
                            ? 'price_1MKbexFSa0TezXP7QaHWHJ8G'
                            : course.title === 'HTML & CSS' &&
                              course.date === '2023-02-07' &&
                              course.age === 'Ages 9-12'
                            ? 'price_1MKbfSFSa0TezXP75EvQRXZX'
                            : course.title === 'HTML & CSS' &&
                              course.date === '2023-02-02' &&
                              course.age === 'Ages 13-16'
                            ? 'price_1MKbfzFSa0TezXP7MPqeMfdX'
                            : course.title === 'HTML & CSS' &&
                              course.date === '2023-02-04' &&
                              course.age === 'Ages 9-12'
                            ? 'price_1MKbgjFSa0TezXP7A3pTuNBb'
                            : 'price_1MKbhAFSa0TezXP7lAaYszc1'
                        }`,
                        quantity: 1,
                      },
                    ],
                  });
                }
              }}
            >
              {course.quantity === 0 ? 'This Class Is full' : 'Register Now!'}
            </Button>
            <p className="my-auto">Or</p>
            <Button
              quantity={course.quantity}
              onClick={() => {
                if (course.quantity > 0) {
                  checkout({
                    lineItems: [
                      {
                        price: `${
                          course.title === 'React' &&
                          course.date === '2023-02-05'
                            ? 'price_1MKZnwFSa0TezXP7btEAoaij'
                            : course.title === 'React' &&
                              course.date === '2023-02-05'
                            ? 'price_1MKZnwFSa0TezXP7btEAoaij'
                            : course.title === 'JavaScript' &&
                              course.date === '2023-02-08' &&
                              course.age === 'Ages 9-12'
                            ? 'price_1MKZyRFSa0TezXP714x1UB4L'
                            : course.title === 'JavaScript' &&
                              course.date === '2023-02-03' &&
                              course.age === 'Ages 13-16'
                            ? 'price_1MKa0MFSa0TezXP7UaiCjEi2'
                            : course.title === 'JavaScript' &&
                              course.date === '2023-02-05' &&
                              course.age === 'Ages 13-16'
                            ? 'price_1MKa2KFSa0TezXP7yKV50ZVq'
                            : course.title === 'HTML & CSS' &&
                              course.date === '2023-02-07' &&
                              course.age === 'Ages 9-12'
                            ? 'price_1MKa4JFSa0TezXP7i0lGsoCR'
                            : course.title === 'HTML & CSS' &&
                              course.date === '2023-02-02' &&
                              course.age === 'Ages 13-16'
                            ? 'price_1MKa6qFSa0TezXP7S8AOvfZf'
                            : course.title === 'HTML & CSS' &&
                              course.date === '2023-02-04' &&
                              course.age === 'Ages 9-12'
                            ? 'price_1MKa51FSa0TezXP7WGpnRMEB'
                            : 'price_1MKa8uFSa0TezXP7fSDJe7iK'
                        }`,
                        quantity: 1,
                      },
                    ],
                  });
                }
              }}
            >
              {course.quantity === 0 ? 'This Class Is full' : 'One Week Trial!'}
            </Button>
          </div>
          <p className="text-[#0f3460] mt-8 font-bold md:text-4xl">
            {course.header}
          </p>
          <div className="leading-6 w-[95%] md:w-[90%] mx-auto">
            <p className="text-[#7C83FD] mt-8 mb-0 font-bold w-[90%] mx-auto">
              {course.classFreq}
            </p>
            <p className="text-[#7C83FD] mt-6 font-bold w-[90%] mx-auto">
              {course.class1}
            </p>
            <p className="text-[#7C83FD] mt-4 font-bold w-[90%] mx-auto">
              {course.class2}
            </p>
          </div>
          <p className="text-[#111] mt-8">{course.description}</p>
          <p className="text-[#111]">{course.wsl}</p>
          <ul className="font-medium">
            <li>{course.wsl1}</li>
            <li>{course.wsl2}</li>
            <li>{course.wsl3}</li>
            <li>{course.wsl4}</li>
            <li>{course.wsl5}</li>
            <li>{course.wsl6}</li>
            <li>{course.wsl7}</li>
            <li>{course.wsl8}</li>
            <li>{course.wsl9}</li>
            <li>{course.wsl10}</li>
            <li>{course.wsl11}</li>
            <li>{course.wsl12}</li>
            <li>{course.wsl13}</li>
            <li>{course.wsl14}</li>
            <li>{course.wsl15}</li>
          </ul>
          <p className="pt-8 text-[#111]">{course.wsd}</p>
          <ul className="font-medium">
            <li>{course.wsd1}</li>
            <li>{course.wsd2}</li>
            <li>{course.wsd3}</li>
            <li>{course.wsd4}</li>
            <li>{course.wsd5}</li>
          </ul>
        </CourseContent>
        <div className="text-center mt-10 mb-14 text-2xl">
          <Button
            quantity={course.quantity}
            onClick={() => {
              if (course.quantity > 0) {
                checkout({
                  lineItems: [
                    {
                      price: `${
                        course.title === 'React' &&
                        course.date === '2023-02-05' &&
                        course.age === 'Ages 13-16'
                          ? 'price_1MKbZLFSa0TezXP7rYSMdrSG'
                          : course.title === 'React' &&
                            course.date === '2023-02-05' &&
                            course.age === 'Ages 13-16'
                          ? 'price_1MKbZLFSa0TezXP7rYSMdrSG'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-02-08' &&
                            course.age === 'Ages 9-12'
                          ? 'price_1MKbcrFSa0TezXP7ybjmOBdf'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-02-03' &&
                            course.age === 'Ages 13-16'
                          ? 'price_1MKbdoFSa0TezXP7v7nSRML0'
                          : course.title === 'JavaScript' &&
                            course.date === '2023-02-05' &&
                            course.age === 'Ages 13-16'
                          ? 'price_1MKbexFSa0TezXP7QaHWHJ8G'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-02-07' &&
                            course.age === 'Ages 9-12'
                          ? 'price_1MKbfSFSa0TezXP75EvQRXZX'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-02-02' &&
                            course.age === 'Ages 13-16'
                          ? 'price_1MKbfzFSa0TezXP7MPqeMfdX'
                          : course.title === 'HTML & CSS' &&
                            course.date === '2023-02-04' &&
                            course.age === 'Ages 9-12'
                          ? 'price_1MKbgjFSa0TezXP7A3pTuNBb'
                          : 'price_1MKbhAFSa0TezXP7lAaYszc1'
                      }`,
                      quantity: 1,
                    },
                  ],
                });
              }
            }}
          >
            {course.quantity === 0 ? 'This Class Is full' : 'Register Now!'}
          </Button>
        </div>
        {/* <Comments courseId={course.id} /> */}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const courseId = context.params.courseId;

  const course = await getCourseById(courseId);
  // console.log(course);

  return {
    props: {
      selectedCourse: course,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const courses = await getFeaturedCourses();

  const paths = courses.map(course => ({
    params: { courseId: course.id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export default CourseDetailPage;
