'use client';

import { useState } from 'react';
import { area } from '../interface/weather/area';
import { prefecture } from '../interface/weather/prefecture';
import { city } from '../interface/weather/city';
import { getImageSrc } from '../utils/getImagePath';
import Image from 'next/image';

type selectPrefList = {
  id: number;
  name: string;
}[];

type selectCityList = {
  title: string;
  id: string;
}[];

const Content = () => {
  const [selectedArea, setSelectedArea] = useState<string>('北海道地方');
  const [selectedPref, setSelectedPref] = useState<string>('道北');
  const [selectedCity, setSelectedCity] = useState<string>();

  const [prefectureList, setPrefectureList] = useState<selectPrefList>(
    prefecture.filter((p) => p.area === selectedArea)[0].prefectures,
  );
  const [cityList, setCityList] = useState<selectCityList>(
    city.filter((c) => c.name === selectedPref)[0].cities,
  );

  const onAreaChangeHandler = (selectedA: string) => {
    setSelectedArea(selectedA);
    const tempList = prefecture.filter((p) => p.area === selectedA)[0]
      .prefectures;
    setPrefectureList(tempList);
    onPrefChangeHandler(tempList[0].name);
  };

  const onPrefChangeHandler = (selectedP: string) => {
    setSelectedPref(selectedP);
    const tempList = city.filter((c) => c.name === selectedP)[0].cities;
    setCityList(tempList);
  };

  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center text-base font-bold text-blue ">
        <p className="text-3xl">天気予報</p>
        <p>天気を知りたい地域を選んで「天気を見る」を押してね</p>
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
            <option key={i} value={v.title}>
              {v.title}
            </option>
          ))}
        </select>
        <button
          disabled={selectedCity === ''}
          onClick={() => {}}
          className="mx-auto flex h-12 justify-center rounded bg-red hover:bg-red_light disabled:bg-red_dark sm:mx-10 sm:w-56"
        >
          <p className="self-center p-2 text-2xl font-bold text-default_dark">
            天気を見る
          </p>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center text-base font-bold text-blue ">
          <p className="text-5xl">これより下は作成中</p>
        </div>

        <div className="flex items-center justify-center p-6  ">
          <Image
            src={getImageSrc('choju86_0001_1.png')}
            width={300}
            height={300}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>

      {/* <div className="items-center justify-center px-20 sm:flex">
        <div className="h-full justify-center sm:flex sm:w-4/5 ">
          <div className="my-5 flex h-full flex-col justify-center rounded border-2 border-red sm:mx-1 sm:w-1/2">
            <p className="text-2xl font-bold text-blue">今日の天気</p>
            <p className="text-2xl font-bold text-blue">画像</p>
            <p className="text-2xl font-bold text-blue">天気概要</p>
            <p className="text-2xl font-bold text-blue">降水確率</p>
            <p className="text-2xl font-bold text-blue">とか</p>
          </div>
          <div className="my-5 flex h-full flex-col justify-center rounded border-2 border-red sm:mx-1 sm:w-1/2">
            <p className="text-2xl font-bold text-blue">気温とか</p>
            <p className="text-2xl font-bold text-blue">概要とか</p>
            <p className="text-2xl font-bold text-blue">色々</p>
            <p className="text-2xl font-bold text-blue">データ見て</p>
            <p className="text-2xl font-bold text-blue">決める</p>
          </div>
        </div>
      </div> */}

      {/* <div className="items-center justify-center px-20 sm:flex">
        <div className="my-5 flex flex-col justify-center rounded border-2 border-red sm:m-5 sm:w-1/6">
          <p className="text-2xl font-bold text-blue">a</p>
          <p className="text-2xl font-bold text-blue">b</p>
          <p className="text-2xl font-bold text-blue">c</p>
          <p className="text-2xl font-bold text-blue">d</p>
          <p className="text-2xl font-bold text-blue">e</p>
        </div>
        <div className="my-5 flex flex-col justify-center rounded border-2 border-red sm:m-5 sm:w-1/6">
          <p className="text-2xl font-bold text-blue">a</p>
          <p className="text-2xl font-bold text-blue">b</p>
          <p className="text-2xl font-bold text-blue">c</p>
          <p className="text-2xl font-bold text-blue">d</p>
          <p className="text-2xl font-bold text-blue">e</p>
        </div>
        <div className="my-5 flex flex-col justify-center rounded border-2 border-red sm:m-5 sm:w-1/6">
          <p className="text-2xl font-bold text-blue">a</p>
          <p className="text-2xl font-bold text-blue">b</p>
          <p className="text-2xl font-bold text-blue">c</p>
          <p className="text-2xl font-bold text-blue">d</p>
          <p className="text-2xl font-bold text-blue">e</p>
        </div>
        <div className="my-5 flex flex-col justify-center rounded border-2 border-red sm:m-5 sm:w-1/6">
          <p className="text-2xl font-bold text-blue">a</p>
          <p className="text-2xl font-bold text-blue">b</p>
          <p className="text-2xl font-bold text-blue">c</p>
          <p className="text-2xl font-bold text-blue">d</p>
          <p className="text-2xl font-bold text-blue">e</p>
        </div>
        <div className="my-5 flex flex-col justify-center rounded border-2 border-red sm:m-5 sm:w-1/6">
          <p className="text-2xl font-bold text-blue">a</p>
          <p className="text-2xl font-bold text-blue">b</p>
          <p className="text-2xl font-bold text-blue">c</p>
          <p className="text-2xl font-bold text-blue">d</p>
          <p className="text-2xl font-bold text-blue">e</p>
        </div>
        <div className="my-5 flex flex-col justify-center rounded border-2 border-red sm:m-5 sm:w-1/6">
          <p className="text-2xl font-bold text-blue">a</p>
          <p className="text-2xl font-bold text-blue">b</p>
          <p className="text-2xl font-bold text-blue">c</p>
          <p className="text-2xl font-bold text-blue">d</p>
          <p className="text-2xl font-bold text-blue">e</p>
        </div>
      </div> */}
    </>
  );
};

export default Content;
