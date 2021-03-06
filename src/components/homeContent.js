import React, { useState, useEffect } from "react";
import TDS from "./TDS"
import ElectricalConductivity from "./electricalConductivity"
import PH from "./pH"
import Temperature from "./Temperature"
import Turbidity from "./Turbidity"
import CombinedChart from "./CombinedChart";

var waterSummary = { type: 'Good', boilParam: 'Good boiling required before cosumption', altUse: 'Water suitable for direct domestic usage' }

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addListener(mqListener);
        return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HomeContent() {
    return (

        <>
        <div className="font-roboto flex-col pb-44 space-y-2 container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4 order-last lg:order-first">
                    <div className="p-4 w-full lg:w-2/4 xl:w-3/5">
                        <div className="flex flex-row">
                            <div className="flex-auto justify-center items-center  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 h-96 overflow-auto no-scrollbar">
                                <div className="flex items-start justify-center h-full">
                                    <iframe
                                        className={classNames(useThemeDetector() ? 'hidden' : 'block', 'border-gray-300 rounded-xl')}
                                        width="100%"
                                        height="100%"
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        title="Saaf-Water-light"
                                        src="//www.arcgis.com/apps/Embed/index.html?webmap=fbadf2d08dd141aa8fbfe60a227e189b&extent=73.5435,15.0755,74.5577,15.6462&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light">
                                    </iframe>

                                    <iframe
                                        className={classNames(useThemeDetector() ? 'block' : 'hidden', 'border-gray-700 rounded-xl')}
                                        width="100%"
                                        height="100%"
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        title="Saaf-Water-Dark"
                                        src="//www.arcgis.com/apps/Embed/index.html?webmap=3c0c2dc817994509b9d529f7000b3a85&extent=50.3459,3.4536,115.2531,38.1566&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=dark">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-first lg:order-last p-4 w-full lg:w-2/4 xl:w-2/5">
                        <div className={classNames(useThemeDetector() ? 'bg-gradient-to-br from-green-500 to-blue-300' : 'bg-gradient-to-br from-green-400 to-yellow-200', 'h-96 rounded-xl')}>
                            <div className="p-4">
                                <div className="justify-self-start font-roboto-semibold text-white text-xl py-5">Water Quality Summary </div>
                                <div className="justify-self-start content-center font-roboto font-extrabold text-white text-6xl pb-5">{waterSummary[Object.keys(waterSummary)[0]]}</div>
                                <div className="justify-self-start text-black-900 font-bold p-2">+ {waterSummary[Object.keys(waterSummary)[1]]}</div>
                                <div className="justify-self-start text-black-900 font-bold p-2">+ {waterSummary[Object.keys(waterSummary)[2]]}</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 overflow-x-auto">
                    <div className="flex justify-center flex-row p-4 lg:w-full">
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <TDS />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <Turbidity />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <PH />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <ElectricalConductivity />
                        </div>
                        <div className="p-6 w-full lg:w-1/6 my-4 mx-4  border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                            <Temperature />
                        </div>
                    </div>
                </div>
                <div className=" hidden lg:block relative border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800" >
                    <div className="p-4">
                        <div className="p-5 justify-self-start content-center font-roboto font-extrabold text-black dark:text-white text-3xl pb-5">History </div>
                        <CombinedChart />
                    </div>
                </div>
            </div>
        </>
    );
}