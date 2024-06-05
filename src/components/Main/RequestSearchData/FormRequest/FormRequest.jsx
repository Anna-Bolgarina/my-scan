import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./FormRequest.module.scss";
import validateInn from "../../../../utils/ValidateInn";
import {
  getDataHistograms,
  getPublicationId,
} from "../../../../store/slices/histograms";
import list from "../../../../img/img-request/list.svg";

function FormRequest() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [inn, setInn] = useState("");
  const [StartDateValid, setStartDateValid] = useState(false);
  const [EndDateValid, setEndDateValid] = useState(false);
  const [InnValid, setInnValid] = useState(false);
  const [DocQuantityValid, setDocQuantityValid] = useState(false);
  const [documentQuantity, setdocumentQuantity] = useState("");
  const [tonality, setTonality] = useState("any");
  // по умолчанию все варианты отмечены
  const [maxFullness, setMaxFullness] = useState(true);
  const [inBusinessNews, setInBusinessNews] = useState(true);
  const [onlyMainRole, setOnlyMainRole] = useState(true);
  const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(true);
  const [excludeTechNews, setExcludeTechNews] = useState(true);
  const [excludeAnnouncements, setExcludeAnnouncements] = useState(true);
  const [excludeDigests, setExcludeDigests] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const settingStartData = (evt) => {
    const newValue = evt.target.value;
    if (new Date(newValue).getTime() <= new Date().getTime()) {
      setStartDateValid(true);
    } else {
      setStartDateValid(false);
    }
    setStartDate(newValue);
  };

  const settingEndData = (evt) => {
    const newValue = evt.target.value;
    if (
      new Date(newValue).getTime() <= new Date().getTime() &&
      new Date(newValue).getTime() >= new Date(startDate).getTime()
    ) {
      setEndDateValid(true);
    } else {
      setEndDateValid(false);
    }
    setEndDate(newValue);
  };

  const settingChangeInn = (evt, typeInputInfo) => {
    const error = {};
    const newValue = evt.target.value;
    const result = validateInn(newValue, error);
    setInnValid(result);
    typeInputInfo(newValue);
  };

  const settingChangeQuantity = (evt) => {
    const newValue = evt.target.value;
    if (+newValue > 0 && +newValue < 1001 && Number.isInteger(+newValue)) {
      setDocQuantityValid(true);
    } else {
      setDocQuantityValid(false);
    }
    setdocumentQuantity(newValue);
  };

  const settingCheck = (evt, setInputChecked) => {
    setInputChecked((checked) => !checked);
  };

  const settingSelect = (evt) => {
    setTonality(evt.target.value);
  };

  const handleSubmit = async () => {
    const requestBody = {
      issueDateInterval: {
        startDate,
        endDate,
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn,
              maxFullness: maxFullness,
              inBusinessNews: inBusinessNews,
            },
          ],
          onlyMainRole: onlyMainRole,
          tonality: tonality,
          onlyWithRiskFactors: onlyWithRiskFactors,
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        themesFilter: {
          and: [],
          or: [],
          not: [],
        },
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
      },
      attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true,
      },
      similarMode: "duplicates",
      limit: documentQuantity,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],
    };
    dispatch(getDataHistograms(requestBody));
    dispatch(getPublicationId(requestBody));
   
    navigate("/result");
  };

  const submitDisable = !(EndDateValid && InnValid && DocQuantityValid);

  return (
    <form className={style.formRequest} onSubmit={handleSubmit}>
      <div className={style.formRequest__container}>
        <img className={style.formRequest__img} src={list} alt="list" />
        <div className={style.formRequest__inputBox}>
          <label htmlFor="inn">
            ИНН компании
            <sup
              className={!inn || InnValid ? "" : `${style.inputBox__errorSup}`}>
              *
            </sup>
          </label>
          <input
            className={
              !inn || InnValid
                ? `${style.inputBox__input}`
                : `${style.inputBox__inputError}`
            }
            type="input"
            id="inn"
            placeholder="10 цифр"
            name="inn"
            value={inn}
            onChange={(evt) => settingChangeInn(evt, setInn)}
          />
          <span
            className={
              !inn || InnValid
                ? `${style.inputBox__innSpan}`
                : `${style.inputBox__innError}`
            }>
            Введите корректные данные
          </span>
          <label className={style.inputBox__label} htmlFor="tone">
            Тональность
          </label>
          <select
            className={`${style.inputBox__input} ${style.inputBox__input_tone}`}
            id="tone"
            value={tonality}
            onChange={(evt) => settingSelect(evt)}>
            <option value="positive">позитивная</option>
            <option value="negative">негативная</option>
            <option value="any">любая</option>
          </select>
          <label className={style.inputBox__label} htmlFor="documentQuantity">
            Количество документов в выдаче
            <sup
              className={
                !documentQuantity || DocQuantityValid
                  ? ""
                  : `${style.inputBox__errorSup}`
              }>
              *
            </sup>
          </label>
          <input
            className={
              !documentQuantity || DocQuantityValid
                ? `${style.inputBox__input}`
                : `${style.inputBox__inputError}`
            }
            type="number"
            id="documentQuantity"
            placeholder="От 1 до 1000"
            min="1"
            max="1000"
            step="1"
            name="documentQuantity"
            value={documentQuantity}
            onChange={(evt) => settingChangeQuantity(evt)}
          />
          <span
            className={
              DocQuantityValid || !documentQuantity
                ? `${style.inputBox__docQuantity}`
                : `${style.inputBox__docQuantityError}`
            }>
            Обязательное поле
          </span>
          <label htmlFor="start">
            Диапазон поиска
            <sup
              className={
                !startDate || !endDate || StartDateValid
                  ? ""
                  : `${style.inputBox__errorSup}`
              }>
              *
            </sup>
          </label>
          <div className={style.inputBox__date}>
            <input
              className={
                !startDate || StartDateValid
                  ? `${style.inputBox__input}`
                  : `${style.inputBox__inputError}`
              }
              type="date"
              id="start"
              name="startDate"
              placeholder="Дата начала"
              value={startDate}
              onChange={(evt) => settingStartData(evt)}
            />
            <input
              className={
                !endDate || EndDateValid
                  ? `${style.inputBox__input}`
                  : `${style.inputBox__inputError}`
              }
              type="date"
              id="end"
              name="startDate"
              placeholder="Дата конца"
              value={endDate}
              onChange={(evt) => settingEndData(evt)}
            />
          </div>
          <span
            className={
              (!startDate && !endDate) || (StartDateValid && EndDateValid)
                ? `${style.inputBox__innSpan}`
                : `${style.inputBox__innError}`
            }>
            Введите корректные данные
          </span>
          <div className={style.inputBox__buttonBox}>
            <button
              type="submit"
              disabled={submitDisable}
              style={{ opacity: submitDisable ? "50%" : "100%" }}
              className={style.buttonBox__button}>
              Поиск
            </button>
            <span className={style.buttonBox__span}>
              * Обязательные к заполнению поля
            </span>
          </div>
        </div>
        <div className={style.formRequest__checkBox}>
          <div className={style.checkboxBox}>
            <label className={style.checkboxBox__label} htmlFor="1">
              <input
                className={style.checkboxBox__label__input}
                type="checkbox"
                id="1"
                name="maxFullness"
                onChange={(evt) => settingCheck(evt, setMaxFullness)}
                checked={maxFullness}
              />
              <span className={style.checkboxBox__label__span}>
                Признак максимальной полноты
              </span>
            </label>
            <label className={style.checkboxBox__label} htmlFor="2">
              <input
                className={style.checkboxBox__label__input}
                type="checkbox"
                id="2"
                name="inBusinessNews"
                onChange={(evt) => settingCheck(evt, setInBusinessNews)}
                checked={inBusinessNews}
              />
              <span className={style.checkboxBox__label__span}>
                Упоминания в бизнес-контексте
              </span>
            </label>
            <label className={style.checkboxBox__label} htmlFor="3">
              <input
                className={style.checkboxBox__label__input}
                type="checkbox"
                id="3"
                name="onlyMainRole"
                onChange={(evt) => settingCheck(evt, setOnlyMainRole)}
                checked={onlyMainRole}
              />
              <span className={style.checkboxBox__label__span}>
                Главная роль в публикации
              </span>
            </label>
            <label className={style.checkboxBox__label} htmlFor="4">
              <input
                className={style.checkboxBox__label__input}
                type="checkbox"
                id="4"
                name="onlyWithRiskFactors"
                onChange={(evt) => settingCheck(evt, setOnlyWithRiskFactors)}
                checked={onlyWithRiskFactors}
              />
              <span className={style.checkboxBox__label__span}>
                Публикации только с риск-факторами
              </span>
            </label>
            <label className={style.checkboxBox__label} htmlFor="5">
              <input
                className={style.checkboxBox__label__input}
                type="checkbox"
                id="5"
                name="excludeTechNews"
                onChange={(evt) => settingCheck(evt, setExcludeTechNews)}
                checked={excludeTechNews}
              />
              <span className={style.checkboxBox__label__span}>
                Включать технические новости рынков
              </span>
            </label>
            <label className={style.checkboxBox__label} htmlFor="6">
              <input
                className={style.checkboxBox__label__input}
                type="checkbox"
                id="6"
                name="excludeAnnouncements"
                onChange={(evt) => settingCheck(evt, setExcludeAnnouncements)}
                checked={excludeAnnouncements}
              />
              <span className={style.checkboxBox__label__span}>
                Включать анонсы и календари
              </span>
            </label>
            <label className={style.checkboxBox__label} htmlFor="7">
              <input
                className={style.checkboxBox__label__input}
                type="checkbox"
                id="7"
                name="excludeDigests"
                onChange={(evt) => settingCheck(evt, setExcludeDigests)}
                checked={excludeDigests}
              />
              <span className={style.checkboxBox__label__span}>
                Включать сводки новостей
              </span>
            </label>
          </div>
          <div className={style.buttonBox}>
            <button
              className={style.buttonBox__button}
              type="submit"
              disabled={submitDisable}
              style={{ opacity: submitDisable ? "50%" : "100%" }}>
              Поиск
            </button>
            <div className={style.buttonBox__span}>
              <span>* Обязательные к заполнению поля</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormRequest;
