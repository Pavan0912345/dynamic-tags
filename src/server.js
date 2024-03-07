const [ogTags, setOgTags] = useState({
    ogTitle: '',
    ogDescription: '',
    ogImage: '/my-rect-app/public/logo192.jpg'
  });
  const question_name = question.question_title
  const meta_desc = question.question_title
  useEffect(() => {
    const newOgTags = {
      ogTitle: question_name,
      ogDescription: meta_desc,
      ogImage: '/my-rect-app/public/logo512.jpg'
    };
    setOgTags(newOgTags);
    updateMetaTags(newOgTags);

  }, [question]);

  const updateMetaTags = (ogTags) => {
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  const ogImageMeta = document.querySelector('meta[property="og:image"]');

  if (ogTitleMeta) {
    ogTitleMeta.setAttribute('content', ogTags.ogTitle);
  }

  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute('content', ogTags.ogDescription);
  }

  if (ogImageMeta) {
    ogImageMeta.setAttribute('content', ogTags.ogImage);
  }
  };

