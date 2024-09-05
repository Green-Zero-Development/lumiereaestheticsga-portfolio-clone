import { apiUrl, revalidateInterval } from '../../../global-settings.js';
import { notFound } from 'next/navigation';
import ThankYou from "../../../templates/ThankYou.js";

async function getAllPages() {
  const res = await fetch(apiUrl + `/pages/all`, {next: {revalidate: revalidateInterval}})
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getSinglePage(slug) {
  const res = await fetch(apiUrl + `/pages/all/${slug}`, {next: {revalidate: revalidateInterval}})
  if (!res.ok) {
    return notFound();
  } 
  else if (slug == "home" || slug == "404-2" || res == "404") {
    return notFound();
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;

  if (page.response === '404') return notFound();

  if (slug == "thank-you") {
    return (
      <>
        <ThankYou pageData={page} />
      </>
    );
  } else {
    return (null);
  }
}

export async function generateStaticParams() {
  const _pages = getAllPages();
  const pages = await _pages;
  return pages.map((pageSing) => ({ 
      slug: pageSing.slug 
    }));
}

export async function generateMetadata({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;
  if (page.response !== '404') {
    return {
      title: page.acf.seo.meta_title,
      description: page.acf.seo.meta_description,
      alternates: {
        canonical: page.acf.seo.canonical
      },
      openGraph: {
        title: page.acf.seo.og_title,
        description: page.acf.seo.og_description,
        locale: 'en_US',
        type: 'website',
        images: [
          {
            url: page.acf.seo.social_image_url
          }
        ]
      },
      twitter: {
        title: page.acf.seo.twitter_title,
        description: page.acf.seo.twitter_description,
      }
    }
  } else {
    return {
        title: '404: Page Not Found',
        description: 'This page does not exist on this website.',
      }
  }
}