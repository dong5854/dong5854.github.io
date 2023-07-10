import * as React from 'react';
import{ useState, useEffect } from 'react';

function NewsSites() {
  const [blogs, setBlogs] = useState(null);
  const [curationSites, setCurationSites] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/techBlog.json');
        const jsonData = await response.json();
        setBlogs(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/json/curationSite.json');
        const jsonData = await response.json();
        setCurationSites(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!blogs || !curationSites) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>기술 블로그</div>
      {
        blogs.map((blog, i) => {
          return (
            <>
              <div key={i}>
                <a target="_blank" rel="noopener noreferrer" href={blog.url}>{blog.blogName}</a>
              </div>
            </>
          );
        })
      }
      <div>큐레이션 사이트</div>
      {
        curationSites.map((site, i) => {
          return (
            <>
              <div key={i}>
                <a target="_blank" rel="noopener noreferrer" href={site.url}>{site.siteName}</a>
              </div>
            </>
          );
        })
      }
    </>
  );
}
export default NewsSites;