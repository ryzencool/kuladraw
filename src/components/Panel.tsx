import React from 'react'
import PanelShape from "./PanelShape";
import PanelConfig from "./PanelConfig";
import PanelOperate from "./PanelOperate";


export default function Panel() {
    return (<div className={'absolute w-full h-40  flex mt-2'}>
        <div className={"ml-2 w-1/4"}>
            <PanelOperate />
            <PanelConfig />
        </div>
        <div className={"flex justify-center w-3/4"}>
            <PanelShape />
        </div>

    </div>)
}
