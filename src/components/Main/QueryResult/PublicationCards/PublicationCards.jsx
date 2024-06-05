import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./PublicationCards.module.scss";
import { getDocuments } from "../../../../store/slices/histograms";
import ArreyPublicationDocs from "../../../../utils/ArrrayPublicationDocs";

function PublicationCards() {
  const { publicationIds, documents } = useSelector((state) => ({
    publicationIds: state.histograms.publicationIds,
    documents: state.histograms.documents,
  }));

  const dispatch = useDispatch();
  const [newCards, setNewCards] = useState(0);

  useEffect(() => {
    if (publicationIds.length) {
      const idsForLoading = publicationIds.slice(newCards, newCards + 10);
      if (idsForLoading.length) {
        dispatch(getDocuments({ ids: idsForLoading }));
      }
    }
  }, [publicationIds, dispatch, newCards]);

  if (!documents.length) {
    return null;
  }

  const docs = ArreyPublicationDocs(documents);

  const loadingPublications = () => {
    setNewCards((newCards) => newCards + 10);
  };

  let isDone = documents.length >= publicationIds.length;

  return (
    <>
      <div className={style.publicationCards}>
        {docs.map((obj, ind) => (
          <div className={style.publicationCards__content} key={ind}>
            <div className={style.content__header}>
              <span>{obj.date}</span>

              <div>
                <a href={obj.publicationUrl} target="_blank" rel="noreferrer">
                  {obj.publicationUrlTitle}
                </a>
                <div className={style.content__header__linkLine}></div>
              </div>
            </div>
            <h4 className={style.content__title}>{obj.publicationTitle}</h4>
            <div className={style.content__badge}>{obj.publicationTags}</div>
            <div>
              {obj.imageUrl && (
                <img
                  className={style.content__img}
                  src={obj.imageUrl}
                  alt="картинка"
                />
              )}
            </div>
            <div
              className={style.content__text}
              dangerouslySetInnerHTML={{ __html: obj.publicationContent }}
            />
            <div className={style.content__footer}>
              <button className={style.footer__link}>
                <a href={obj.publicationUrl} target="_blank" rel="noreferrer">
                  Читать в источнике
                </a>
              </button>
              <div className={style.footer__text}>
                {obj.wordCount} слов&lang;а&rang;
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.boxButtonLoading}>
        {!isDone && (
          <button
            onClick={loadingPublications}
            className={style.boxButtonLoading__button}>
            Показать больше
          </button>
        )}
      </div>
    </>
  );
}

export { PublicationCards };
