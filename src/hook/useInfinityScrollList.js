import { useEffect, useState } from 'react';

const useInfinityScrollList = ({ targetRef, callback, options }) => {
  // const [list, setList] = useState(contents);
  // const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchData = () => {
    //   setLoading(true);
    //   console.log('intersecting true');
    //   setTimeout(() => {
    //     setLoading(false);
    //     setList(list.push(...contents));
    //   }, 1000);
    // };

    // const callback = (entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       // observer.unobserve(entry.target);
    //       fetchData();
    //     } else {
    //       console.log('intersecting false');
    //     }
    //   });
    // };

    // const options = {
    //   threshold: 0.5,
    // };

    const observer = new IntersectionObserver(callback, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    // isLoading,
    // list,
  };
};

export default useInfinityScrollList;