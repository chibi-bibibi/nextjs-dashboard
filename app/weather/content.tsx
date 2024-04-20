'use client';

import { useState } from 'react';
import { area } from '../interface/weather/area';
import { prefecture } from '../interface/weather/prefecture';
import { city } from '../interface/weather/city';
import { getImageSrc } from '../utils/getImagePath';
import Image from 'next/image';
import { createCustomForecast } from '../utils/weather/createCustomForecast';
import { Forecast } from '../interface/weather/forecast';

type selectPrefList = {
  id: number;
  name: string;
}[];

type selectCityList = {
  title: string;
  id: string;
}[];

const Content = () => {
  const [selectedArea, setSelectedArea] = useState<string>(area[0].area);
  const [selectedPref, setSelectedPref] = useState<string>(
    prefecture[0].prefectures[0].name,
  );
  const [selectedCity, setSelectedCity] = useState<string>(
    city[0].cities[0].id,
  );
  const [forecast, setForecast] = useState<Forecast>();

  const [prefectureList, setPrefectureList] = useState<selectPrefList>(
    selectedArea
      ? prefecture.filter((p) => p.area === selectedArea)[0].prefectures
      : prefecture[0].prefectures,
  );
  const [cityList, setCityList] = useState<selectCityList>(
    selectedPref
      ? city.filter((c) => c.name === selectedPref)[0].cities
      : city[0].cities,
  );

  const onAreaChangeHandler = (selectedA: string) => {
    setSelectedArea(selectedA);
    const tempList = prefecture.filter((p) => p.area === selectedA)[0]
      .prefectures;
    setPrefectureList(tempList);
    setSelectedPref(tempList[0].name);
    onPrefChangeHandler(tempList[0].name);
  };

  const onPrefChangeHandler = (selectedP: string) => {
    setSelectedPref(selectedP);
    const tempList = city.filter((c) => c.name === selectedP)[0].cities;
    setCityList(tempList);
    setSelectedCity(tempList[0].id);
  };

  const onClick = async (selectedCity: string | undefined) => {
    const res = await fetch(
      `https://weather.tsukumijima.net/api/forecast/city/${selectedCity}`,
      {
        mode: 'cors',
      },
    );
    const data = await res.json();
    const customForecast = createCustomForecast(data);
    setForecast(customForecast);
    console.log(forecast);
    return;
  };

  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center text-base font-bold text-blue ">
        <p className="text-3xl">天気予報</p>
        <p>天気を知りたい地域を選んで「天気を見る」を押してね</p>
        <p className="text-xs">
          ※APIの仕様上、当日の気温と降水確率は取得できません
        </p>
      </div>

      <div className="items-center justify-center px-20 sm:flex">
        <select
          className="text-bold my-5 flex w-64 justify-center rounded border-2 border-red bg-default_light text-blue sm:m-5"
          value={selectedArea}
          onChange={(e) => onAreaChangeHandler(e.target.value)}
        >
          {area.map((v, i) => (
            <option key={i} value={v.area}>
              {v.area}
            </option>
          ))}
        </select>
        <select
          className="text-bold my-5 flex w-64 justify-center rounded border-2 border-red bg-default_light text-blue sm:m-5"
          value={selectedPref}
          defaultValue={''}
          onChange={(e) => onPrefChangeHandler(e.target.value)}
        >
          {prefectureList?.map((v, i) => (
            <option key={i} value={v.name}>
              {v.name}
            </option>
          ))}
        </select>
        <select
          className="text-bold my-5 flex w-64 justify-center rounded border-2 border-red bg-default_light text-blue sm:m-5"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cityList?.map((v, i) => (
            <option key={i} value={v.id}>
              {v.title}
            </option>
          ))}
        </select>
        <button
          onClick={() => onClick(selectedCity)}
          className="mx-auto flex h-12 justify-center rounded bg-red hover:bg-red_light disabled:bg-red_dark sm:mx-10 sm:w-56"
        >
          <p className="self-center p-2 text-2xl font-bold text-default_dark">
            天気を見る
          </p>
        </button>
      </div>

      {forecast && (
        <div className="items-center justify-center px-20 sm:flex ">
          <div className="bg-de h-full justify-center sm:flex sm:w-4/5">
            <div className="mx-10 my-5 flex h-96 flex-col items-center rounded border-2 border-red bg-default_light sm:w-1/3">
              <p className="text-3xl font-bold  text-blue">
                {forecast.today.date}
              </p>
              <Image
                src={forecast.today.image.url}
                alt={forecast.today.image.title}
                width={forecast.today.image.width}
                height={forecast.today.image.height}
              />
              <p className="mt-5 text-2xl text-blue">気温（最低/最高）</p>
              <p className="mt-2 text-xl text-blue">
                {forecast.today.temperature.min.celsius}/
                {forecast.today.temperature.max.celsius}
              </p>
              <p className="mt-5 text-2xl text-blue">降水確率</p>
              <p className="mt-2 text-xl text-blue">
                00時 ~ 06時： {forecast.today.chanceOfRain.T00_06}
              </p>
              <p className="text-xl text-blue">
                06時 ~ 12時： {forecast.today.chanceOfRain.T06_12}
              </p>
              <p className="text-xl text-blue">
                12時 ~ 18時： {forecast.today.chanceOfRain.T12_18}
              </p>
              <p className="text-xl text-blue">
                18時 ~ 24時： {forecast.today.chanceOfRain.T18_24}
              </p>
            </div>

            <div className="mx-10 my-5 flex h-96 flex-col items-center rounded border-2 border-red bg-default_light sm:w-1/3">
              <p className="text-3xl font-bold  text-blue">
                {forecast.tomorrow.date}
              </p>
              <Image
                src={forecast.tomorrow.image.url}
                alt={forecast.tomorrow.image.title}
                width={forecast.tomorrow.image.width}
                height={forecast.tomorrow.image.height}
              />
              <p className="mt-5 text-2xl text-blue">気温（最低/最高）</p>
              <p className="mt-2 text-xl text-blue">
                {forecast.tomorrow.temperature.min.celsius}/
                {forecast.tomorrow.temperature.max.celsius}
              </p>
              <p className="mt-5 text-2xl text-blue">降水確率</p>
              <p className="mt-2 text-xl text-blue">
                00時 ~ 06時： {forecast.tomorrow.chanceOfRain.T00_06}
              </p>
              <p className="text-xl text-blue">
                06時 ~ 12時： {forecast.tomorrow.chanceOfRain.T06_12}
              </p>
              <p className="text-xl text-blue">
                12時 ~ 18時： {forecast.tomorrow.chanceOfRain.T12_18}
              </p>
              <p className="text-xl text-blue">
                18時 ~ 24時： {forecast.tomorrow.chanceOfRain.T18_24}
              </p>
            </div>

            <div className="mx-10 my-5 flex h-96 flex-col items-center rounded border-2 border-red bg-default_light sm:w-1/3">
              <p className="text-3xl font-bold  text-blue">
                {forecast.future.date}
              </p>
              <Image
                src={forecast.future.image.url}
                alt={forecast.future.image.title}
                width={forecast.future.image.width}
                height={forecast.future.image.height}
              />
              <p className="mt-5 text-2xl text-blue">気温（最低/最高）</p>
              <p className="mt-2 text-xl text-blue">
                {forecast.future.temperature.min.celsius}/
                {forecast.future.temperature.max.celsius}
              </p>
              <p className="mt-5 text-2xl text-blue">降水確率</p>
              <p className="mt-2 text-xl text-blue">
                00時 ~ 06時： {forecast.future.chanceOfRain.T00_06}
              </p>
              <p className="text-xl text-blue">
                06時 ~ 12時： {forecast.future.chanceOfRain.T06_12}
              </p>
              <p className="text-xl text-blue">
                12時 ~ 18時： {forecast.future.chanceOfRain.T12_18}
              </p>
              <p className="text-xl text-blue">
                18時 ~ 24時： {forecast.future.chanceOfRain.T18_24}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Content;
