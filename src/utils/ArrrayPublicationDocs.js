import noPhoto from "../img/img-result/nophoto.jpg";

const ArreyPublicationDocs = (docs) => {
  return docs.map((doc) => {
    const customDate = new Date(doc.ok.issueDate);
    const formatDate = `${customDate.getDate()}.${
      customDate.getMonth() + 1
    }.${customDate.getFullYear()}`;
    return {
      date: formatDate,
      publicationUrl: doc.ok.url,
      publicationUrlTitle: doc.ok.source.name,
      publicationTitle: doc.ok.title.text,
      publicationTags: getTags(doc.ok.attributes),
      publicationContent: parseXml(doc.ok.content.markup),
      imageUrl: parseImageUrl(doc.ok.content.markup),
      wordCount: doc.ok.attributes.wordCount,
    };
  });
};

const parseXml = (xml) => {
  const DOMParse = new DOMParser();
  const xmlDoc = DOMParse.parseFromString(xml, "text/html");
  const sentences = [...xmlDoc.querySelectorAll("sentence")];
  const htmlText = sentences.reduce((acc, el) => {
    const text = acc.replace(el, "");
    return text;
  }, xmlDoc.documentElement.textContent);
  return htmlText || xmlDoc.documentElement.textContent;
};

const parseImageUrl = (xml) => {
  const DOMParse = new DOMParser();
  const xmlDoc = DOMParse.parseFromString(xml, "text/html");
  const imgs = xmlDoc.documentElement.textContent.match(
    /<img[^>]+src="?\'?([^"\']+)"?\'?[^>]*>/gim
  );
  const imagesSources = imgs?.reduce((acc, img) => {
    const src = img.match(/src="?\'?([^"\']+)"?\'?[^>]*>/);
    if (src && src[1]) {
      return [...acc, src[1]];
    }
    return acc;
  }, []);
  return imagesSources ? imagesSources[0] : noPhoto;
};

const getTags = (type) => {
  const tag = [];
  if (type.isTechNews) {
    tag.push("технические новости");
  }
  if (type.isAnnouncement) {
    tag.push("анонсы и события");
  }
  if (type.isDigest) {
    tag.push("сводки новостей");
  } else {
    tag.push("новости");
  }
  return tag;
};

export default ArreyPublicationDocs;
