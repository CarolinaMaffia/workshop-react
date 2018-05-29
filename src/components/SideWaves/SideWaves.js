import React, { Component } from 'react';

class SideWaves extends Component{
    render(){
        return(
            <div className="waves">
                <svg
                width="410"
                height="935"
                viewBox="0 0 400 689"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">

                    <title>Waves</title>
                    <desc>Created using Figma</desc>
                    <g id="Canvas" transform="translate(720 177)">
                        <g id="Waves">
                            <g id="backWave">
                                <use xlinkHref="#path0Fill" transform="translate(-720 -158.222)" fill="#DD2476" fillOpacity="0.37" />
                            </g>
                            <g id="frontWave">
                                <use xlinkHref="#path1Fill" transform="translate(-720 -176.527)" fill="url(#paint1Linear)" fillOpacity="0.6"/>
                            </g>
                        </g>
                    </g>
                    <defs>
                        <linearGradient id="paint1Linear" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.44929e-14 221 -400 1.35323e-14 400 7.52681)">
                            <stop offset="0" stopColor="#FF512F" />
                            <stop offset="1" stopColor="#DD2476" />
                        </linearGradient>
                        <path id="path0Fill" d="M 0 60.222C 35.5 20.222 61.3051 -5.20902 92.5 8.22203C 128.5 23.7219 114 42.7219 211 60.222C 268.632 70.6198 308.621 7.02893 343 0.721831C 368.44 -3.94529 387.5 15.2219 400 23.7219L 400 1008.22L 0 1008.22L 0 60.222Z"/>
                        <path id="path1Fill" d="M 0 36.4959C 14.0351 50.8858 62.5188 84.4509 95 74.5268C 135.602 62.1217 181.5 -41.9732 257 19.0267C 321.612 71.2295 344 96.5267 400 44.9313L 400 971.527L 0 971.527L 0 36.4959Z"/>
                    </defs>
                </svg>
            </div>
        )
    }
}

export default SideWaves;