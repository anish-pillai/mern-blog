import { Footer as FlowBiteFooter } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs';
const Footer = () => {
  const GITHUB = 'https://www.github.com/anish-pillai';
  return (
    <FlowBiteFooter container className='border border-t-8 border-t-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Anish's
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <FlowBiteFooter.Title title='About' />
              <FlowBiteFooter.LinkGroup col>
                <FlowBiteFooter.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  100 JS Projects
                </FlowBiteFooter.Link>
                <FlowBiteFooter.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Anish's blog
                </FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
            <div>
              <FlowBiteFooter.Title title='Follow us' />
              <FlowBiteFooter.LinkGroup col>
                <FlowBiteFooter.Link
                  href={GITHUB}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </FlowBiteFooter.Link>
                <FlowBiteFooter.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Discord
                </FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
            <div>
              <FlowBiteFooter.Title title='Legal' />
              <FlowBiteFooter.LinkGroup col>
                <FlowBiteFooter.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Privacy Policy
                </FlowBiteFooter.Link>
                <FlowBiteFooter.Link
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Terms & Conditions
                </FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowBiteFooter.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <FlowBiteFooter.Copyright
            href='#'
            by="Anish's Blog"
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <FlowBiteFooter.Icon href='#' icon={BsFacebook} />
            <FlowBiteFooter.Icon href='#' icon={BsInstagram} />
            <FlowBiteFooter.Icon href='#' icon={BsTwitter} />
            <FlowBiteFooter.Icon href={GITHUB} icon={BsGithub} />
            <FlowBiteFooter.Icon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FlowBiteFooter>
  );
};

export default Footer;
