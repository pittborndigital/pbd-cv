import React from 'react'

const KnockoutIcon = ({fill = "#E42E16", width= 96, height=32}) => (
    <svg width={width} height={height} viewBox="0 0 512 124" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path
            fill={fill}
            style={{fillRule: 'evenodd'}}
            d="M299.665432,6.01551691 C301.228134,3.25547639 303.618409,0.896015917 306.739411,0.0200221954 C308.148045,-0.00638967561 309.556678,-0.00198769711 310.969713,0.00681625989 C312.884573,0.891613938 314.566129,2.27823717 315.604996,4.13147011 C316.428166,5.98910504 315.983566,7.93477954 315.560976,9.82322831 C315.015131,10.9633407 314.601345,12.1650809 314.205167,13.362419 C313.870617,14.0843435 313.571282,14.8194739 313.307163,15.5678103 C312.985819,16.2897347 312.690886,17.0248651 312.426768,17.7687995 C312.109825,18.495126 311.810491,19.2258544 311.546372,19.9697888 C311.22943,20.6961152 310.934497,21.4312456 310.661574,22.17518 C310.349034,22.9015064 310.054101,23.6322349 309.781179,24.3761692 C309.468638,25.1024957 309.173706,25.8332241 308.900783,26.5771585 C308.588242,27.3034849 308.29331,28.0342134 308.024789,28.7781477 C307.707847,29.5044742 307.412914,30.2352026 307.144394,30.979137 C306.827451,31.7054634 306.532518,32.4361919 306.263998,33.1801262 C305.947055,33.9064527 305.652123,34.6371811 305.383602,35.3811155 C305.06666,36.1074419 304.771727,36.8381704 304.503206,37.5821047 C304.186264,38.3084312 303.891331,39.0391596 303.622811,39.783094 C303.31027,40.5094204 303.010936,41.2445508 302.742415,41.9840832 C302.425473,42.7104097 302.13054,43.4455401 301.862019,44.1894745 C301.545077,44.9113989 301.250144,45.6421274 300.986026,46.3860617 C300.669083,47.1123882 300.369749,47.8431166 300.101228,48.587051 C299.788687,49.3133774 299.489353,50.0485078 299.225234,50.7924422 C298.90389,51.5187687 298.604555,52.2538991 298.331633,52.9978334 C298.159955,53.4556392 298.001484,53.9178469 297.851817,54.3844567 C303.402712,50.215783 308.856763,45.9018441 314.574933,41.9620733 C315.160396,41.6495329 315.754663,41.3413944 316.344529,41.0244519 C318.290203,40.2276938 320.411957,40.3729591 322.463279,40.5138224 C323.915932,41.3457964 325.293751,42.3406435 326.143333,43.8197083 C327.217415,46.5225231 326.742002,49.7095555 324.963602,52.0029863 C323.849902,53.3940115 322.502896,54.5649378 321.164695,55.7314621 C320.548418,56.1452481 319.949749,56.5854459 319.37309,57.0520556 C316.340127,59.1341915 313.439223,61.4056124 310.503103,63.6198076 C310.996125,64.350536 311.484744,65.0900684 311.973364,65.8251988 C312.263895,66.2786026 312.554425,66.7276044 312.858162,67.1766062 C313.527262,68.3871503 314.280001,69.5448706 315.059151,70.689385 C315.99237,72.3665388 317.079659,73.9468491 318.14934,75.5403653 C318.558724,76.2754957 318.981314,77.0062242 319.439119,77.7193447 C319.742856,78.1639445 320.046592,78.6129463 320.367937,79.0575462 C321.226323,80.6422584 322.13313,82.2225687 322.634956,83.9701542 C322.9563,85.2599339 322.406053,86.5277037 322.168346,87.7778656 C320.838949,89.8820113 319.091363,91.8100779 316.758315,92.804925 C315.151592,93.3287605 313.536066,93.4035941 311.94255,92.7917191 C310.965311,92.1050104 309.93965,91.4227038 309.305765,90.3838368 C307.082766,87.0295292 304.859767,83.6708196 302.627964,80.320914 C302.333031,79.8763142 302.0425,79.4361163 301.747568,78.9959185 C301.452635,78.5513186 301.162105,78.1067188 300.867172,77.6709229 C300.57224,77.2263231 300.281709,76.7817233 299.986776,76.3459274 C299.691844,75.9013276 299.392509,75.4523258 299.097577,75.0165299 C297.226736,71.7810757 294.942109,68.8141422 293.040454,65.6050999 C293.080072,65.7459632 293.154906,66.0320918 293.190122,66.1729551 C292.798346,66.8904776 292.459393,67.634412 292.168863,68.3959542 C291.860724,69.1266827 291.570194,69.8618131 291.310477,70.6057474 C290.989132,71.3276719 290.689798,72.0628023 290.425679,72.8067367 C290.108737,73.5286612 289.813804,74.2637916 289.549685,75.0077259 C289.228341,75.7296504 288.933408,76.4647808 288.673692,77.2087152 C287.102185,80.9151811 285.847622,84.7669123 283.835917,88.2708872 C282.180773,90.1065122 280.512424,92.1710401 277.998894,92.804925 C276.885193,92.9501903 275.789101,93.5532614 274.65339,93.2363189 C273.755387,93.011818 272.848579,92.8621507 271.937369,92.7212874 C270.612374,91.572371 269.032064,90.4762784 268.51263,88.706683 C267.412136,86.2283691 268.8912,83.6532117 269.573507,81.2761433 C269.894851,80.5498169 270.20299,79.8190884 270.480315,79.0751541 C270.784051,78.3444256 271.083386,77.6136972 271.351906,76.8741648 C271.660045,76.1478384 271.963781,75.412708 272.236704,74.6731756 C272.540441,73.9468491 272.844177,73.2117187 273.1171,72.4721863 C273.425238,71.7414579 273.720171,71.0107295 273.997495,70.2667951 C274.310036,69.5448706 274.600566,68.8097402 274.873489,68.0702078 C275.18603,67.3438814 275.480962,66.608751 275.753885,65.8692186 C276.062023,65.1384901 276.361358,64.4077617 276.634281,63.6638273 C276.946821,62.9419029 277.241754,62.2067725 277.514676,61.4628381 C277.827217,60.7409136 278.122149,60.0057832 278.395072,59.2618488 C278.707612,58.5399244 279.002545,57.804794 279.275468,57.0652616 C279.588008,56.3389351 279.882941,55.6038047 280.155863,54.8598703 C280.464002,54.1335439 280.763336,53.4028155 281.036259,52.6588811 C281.3488,51.9325546 281.643732,51.2018262 281.916655,50.4578918 C282.229195,49.7315654 282.524128,49.000837 282.79705,48.2569026 C283.109591,47.5305761 283.404523,46.7998477 283.677446,46.0559133 C283.989987,45.3295869 284.284919,44.5944565 284.55344,43.8549241 C284.870382,43.1285976 285.165315,42.3934672 285.433836,41.6539348 C285.746376,40.9276084 286.041309,40.192478 286.314231,39.4485436 C286.626772,38.7266191 286.926106,37.9914887 287.194627,37.2475544 C287.507167,36.5256299 287.8021,35.7904995 288.075023,35.0465651 C288.387563,34.3246406 288.682496,33.5895102 288.955418,32.8455759 C289.267959,32.1236514 289.562891,31.388521 289.835814,30.6445866 C290.148355,29.9226621 290.443287,29.1875317 290.711808,28.4435974 C291.319281,26.9865425 291.91795,25.5206836 292.472599,24.0416189 C292.789542,23.3152924 293.084474,22.584564 293.357397,21.8406296 C293.669937,21.1143032 293.96487,20.3835747 294.237793,19.6396404 C294.550333,18.9133139 294.845266,18.1825855 295.113786,17.4386511 C295.426327,16.7123247 295.725661,15.9815962 295.994182,15.2376619 C296.306722,14.5113354 296.606057,13.780607 296.874578,13.0366726 C297.187118,12.3147481 297.486453,11.5796177 297.750571,10.8356834 C298.419672,9.24216715 299.062361,7.635445 299.665432,6.01551691 Z M26.7075492,11.1042041 C31.7830304,9.35661859 37.2106699,9.47987399 42.4974461,9.73959072 C43.3602339,9.91126788 44.2142177,10.1357688 45.0946134,10.2194064 C48.0131252,11.0998021 50.8479993,12.2355125 53.4847844,13.780607 C56.7994742,16.2016952 59.7840157,19.1466188 61.8133278,22.7474372 C62.3063493,24.0636288 62.8389887,25.3666144 63.3408143,26.678404 C64.0583368,29.7025632 63.9614933,32.814762 63.8734537,35.9005489 C63.5829231,39.3384942 62.5440562,42.648782 61.553611,45.9370599 C61.0253736,47.0815743 60.5939797,48.2701085 60.2154096,49.4718487 C59.519897,50.8496679 59.0400813,52.3287327 58.274137,53.6713362 C59.6343484,51.8841329 61.355522,50.418274 62.8565967,48.7543262 C65.3084987,45.8005986 68.1697847,43.2254412 70.771354,40.403773 C73.8307291,36.7237189 77.519587,33.6159221 80.5525502,29.9094562 C86.0550234,24.5258365 90.9896413,18.6007734 96.6505856,13.371223 C97.5617952,12.7901618 98.4642007,12.1914927 99.3622044,11.5840197 C101.620419,10.3118479 104.217587,10.3602697 106.731116,10.5803686 C108.698801,11.5532059 110.640073,12.9838489 111.428027,15.1144065 C112.158756,16.7739524 111.833009,18.6227833 111.833009,20.3747708 C111.181517,21.558903 110.600455,22.782653 109.948963,23.9667852 C109.636422,24.4113851 109.332686,24.8647888 109.037753,25.3225946 C107.20653,27.1714256 105.67024,29.2887772 103.768585,31.0715785 C101.607213,33.3209895 99.3181846,35.4647531 97.3372942,37.8814393 C94.3571548,41.0552658 91.1261026,44.0045914 88.3308462,47.345693 C86.0946412,49.6611337 83.8056123,51.9193487 81.5958191,54.2612013 C79.2319567,57.1180853 76.4763181,59.6184091 73.9319746,62.3124199 C74.2048972,62.906687 74.4778199,63.5009541 74.7551445,64.0952212 C75.274578,65.7371592 75.7984134,67.3790972 76.50273,68.9550055 C77.0529773,70.5793356 77.5548029,72.2256755 78.2635214,73.7971819 C78.8137687,75.4215119 79.3155943,77.0678519 80.0243128,78.6393582 C80.5745601,80.2636883 81.0763857,81.9100282 81.7851042,83.4771326 C82.3353515,85.1058646 82.8371771,86.7522046 83.5458956,88.3193089 C84.0917409,89.943639 84.6067724,91.585577 85.302285,93.1570833 C85.6940611,94.3632254 86.0990431,95.5737695 86.6668984,96.7182839 C86.7153201,96.9207749 86.8077617,97.321355 86.8561834,97.519444 C87.3756169,98.8444395 87.7938049,100.209053 88.3484542,101.525244 C88.590563,102.119512 88.8678876,102.700573 89.1584182,103.277232 C90.5758553,105.456211 93.2654641,106.490676 95.7833958,106.530294 C225.941096,106.525892 356.098796,106.534696 486.260899,106.525892 C487.436227,106.512686 488.554329,106.957286 489.725256,107.054129 C490.645269,107.520739 491.569685,107.982947 492.502904,108.427547 C493.251241,109.263923 493.823498,110.223554 494.373745,111.200793 C494.439775,112.904359 494.448579,114.612327 494.351735,116.320294 C494.153646,116.782502 493.968763,117.24471 493.80589,117.720123 C492.731807,119.612974 491.133889,121.136059 489.285058,122.267367 C487.423021,122.83082 485.578592,123.645186 483.61531,123.702412 C352.128212,123.706814 220.641114,123.702412 89.1540162,123.706814 C87.5605,123.755236 86.0462194,123.138959 84.4483012,123.200587 C82.8195692,122.58431 81.0763857,122.179328 79.6281347,121.166872 C77.7528919,120.061976 76.6876131,118.103095 75.4418532,116.39953 C74.9136158,115.347457 74.3809764,114.304188 73.8703469,113.247713 C73.5269925,112.362915 73.1792362,111.478118 72.7610483,110.624134 C72.7170285,110.426045 72.624587,110.029867 72.5761652,109.831778 C71.6253378,107.318248 70.7493441,104.769503 69.7280851,102.277983 C69.1690338,100.644849 68.6804142,98.9809009 67.9232739,97.4226005 C67.8748521,97.2245114 67.7780086,96.8283334 67.7295869,96.6302443 C67.2101534,95.2920429 66.8007694,93.9142236 66.2065023,92.611238 C65.8147262,91.4138998 65.4053422,90.2209636 64.8859087,89.0764492 C64.3356614,87.4521192 63.8294339,85.8057792 63.1207154,84.2386749 C62.5704681,82.6143448 62.0598386,80.9724068 61.3643259,79.4053025 C60.9681479,78.1991604 60.5631659,76.9930182 59.9997126,75.8529058 C59.9512908,75.6548168 59.8544473,75.2542367 59.8060256,75.0561477 C59.2865921,73.7179462 58.8772081,72.340127 58.282941,71.0371413 C57.8911649,69.8398032 57.4817809,68.646867 56.9579455,67.5023526 C56.3372665,65.587492 55.6637638,63.6902392 54.8714077,61.8414082 C54.7745641,62.4092635 54.6645147,62.9771187 54.5544652,63.5449739 C54.184699,64.2624964 53.8633546,65.0020288 53.5860299,65.7591691 C53.2778914,66.4854956 52.9829589,67.216224 52.7144382,67.9601584 C52.4018977,68.6820828 52.1025632,69.4172132 51.8296405,70.1567456 C51.5171,70.8830721 51.2221675,71.6182025 50.9492448,72.3577349 C50.6367043,73.0840613 50.3417718,73.8147898 50.0644471,74.5587241 C49.7519067,75.2850506 49.4569741,76.020181 49.1928554,76.7685173 C48.3784894,78.4940929 47.6785748,80.2680902 47.0050721,82.0508915 C46.6837277,82.777218 46.3887951,83.5079464 46.1202744,84.2518808 C45.803332,84.9738053 45.5039974,85.7089357 45.2354767,86.45287 C44.9185343,87.1747945 44.6236017,87.9099249 44.355081,88.6538593 C44.0381386,89.3757838 43.738804,90.1065122 43.4702833,90.8504466 C43.1533409,91.576773 42.8584083,92.3075014 42.5898876,93.0470338 C42.2729452,93.7777623 41.9780126,94.5084907 41.7094919,95.256827 C41.3353238,96.1108109 41.0007734,96.9780006 40.6574191,97.8451904 C40.3712905,98.4394575 40.0851619,99.0337246 39.8034353,99.6279917 C38.41241,101.881805 36.8409037,104.082794 34.5606789,105.513437 C34.3405799,105.63229 33.909186,105.874399 33.6934891,105.997655 C31.9811195,106.45546 30.2599459,107.221405 28.4507327,106.935276 C27.7023964,106.776805 26.9716679,106.569912 26.2189296,106.446656 C24.902738,105.702722 23.6657821,104.817924 22.6313171,103.708626 C22.3099727,103.074741 21.9754223,102.445258 21.627666,101.824579 C21.2138801,98.8400375 21.8081471,95.8643001 23.067113,93.1482793 C23.3840555,92.4263549 23.68339,91.6956264 23.9563127,90.9516921 C24.2732551,90.2253656 24.5681877,89.4946372 24.8367084,88.7507028 C25.1536508,88.0243764 25.4485834,87.2936479 25.7171041,86.5497136 C26.0340465,85.8277891 26.333381,85.0970607 26.6019017,84.3531263 C26.9144422,83.6267998 27.2137767,82.8960714 27.4822974,82.156539 C27.7948379,81.4258106 28.0941724,80.6950822 28.3670951,79.9555498 C28.6752336,79.2248213 28.9745681,78.4940929 29.2474908,77.7545605 C29.5600313,77.0282341 29.8549638,76.2931037 30.1322885,75.5535713 C30.440427,74.8272448 30.7397615,74.0921144 31.0038802,73.3437781 C32.1351887,70.896278 33.0860161,68.3695424 34.0720592,65.8604146 C34.3890017,65.1340882 34.6927382,64.4033597 34.9612589,63.6594254 C35.2737994,62.9330989 35.5731339,62.2023705 35.8416546,61.4584361 C36.1585971,60.7365116 36.4535296,60.0013812 36.7220503,59.2618488 C37.0389928,58.5355224 37.3383273,57.804794 37.606848,57.0608596 C37.9193885,56.3345331 38.218723,55.6038047 38.4872437,54.8598703 C38.7997842,54.1335439 39.0991187,53.4028155 39.3720414,52.6588811 C39.6801799,51.9325546 39.9795144,51.2018262 40.2524371,50.4622938 C40.5649775,49.7359674 40.8599101,49.000837 41.1328328,48.2569026 C42.4226125,45.2283414 43.536313,42.1293485 44.3770909,38.9423161 C45.0021719,36.6312774 45.3499282,34.0649239 44.4651305,31.7802971 C43.0873112,29.3944247 40.7762725,27.6116234 38.0822617,26.9865425 C35.2649954,26.5903644 32.3200718,26.8060614 29.6920906,27.9769876 C29.0978235,28.2499103 28.5079584,28.5360389 27.9401032,28.8573833 C23.3972614,31.7142674 19.5015104,36.1558637 18.3658,41.5218755 C17.9652199,42.7852433 18.1280931,44.1366507 17.9167982,45.4352344 C18.0356516,47.2004278 18.1412991,48.983229 19.0393027,50.5635393 C20.2806606,52.6500771 22.1382955,54.3492408 24.3392848,55.3837058 C25.2504943,55.7798839 26.1617039,56.1892679 27.1213352,56.4665925 C28.4683406,57.1709091 29.7008946,58.0733147 30.7441635,59.1782113 C30.845409,59.4159181 31.043498,59.8957338 31.1403416,60.1334406 C31.3252247,60.6000503 31.5145097,61.0622581 31.7170008,61.5244658 C32.3552876,65.7019434 29.4984036,69.6109003 25.7875357,71.2440343 C22.4024142,72.2256755 18.6959483,72.0495964 15.2976209,71.2088185 C14.5756965,70.8654642 13.844968,70.5617277 13.0966317,70.284403 C12.3615013,69.8133913 11.604361,69.3819974 10.8428187,68.9638095 C7.37846163,66.6175549 4.87373586,63.2060216 2.77839409,59.649223 C2.35580416,58.5927481 1.95962609,57.5274693 1.47540846,56.5018083 C0.308884155,52.4299782 -0.219353265,48.2040789 0.0843832516,43.9693755 C0.669846392,40.6766956 1.12325018,37.313584 2.36020614,34.1617674 C2.83561981,33.1405084 3.24060184,32.0884356 3.66319177,31.0451667 C4.28387074,30.0283096 4.90895169,29.0114526 5.48120889,27.9681837 C6.07987797,27.09219 6.66974309,26.2161962 7.25080425,25.3269966 C10.1561101,21.6073248 13.5500355,18.2662231 17.4457865,15.5810162 C17.8947883,15.2816817 18.348192,14.9779451 18.7927919,14.6654047 C20.5227694,13.7233813 22.2879628,12.8517895 24.0619601,11.9978057 C24.9511598,11.724883 25.8315555,11.4211465 26.7075492,11.1042041 Z M474.842166,23.0995955 C477.056362,22.2236017 479.45544,22.3028374 481.79289,22.4613086 C483.210328,23.1348113 484.425274,24.1340604 485.468543,25.3005847 C485.569788,25.5338896 485.772279,26.0093033 485.869123,26.2470101 C486.049604,26.7180218 486.247693,27.1934355 486.458988,27.6600452 C486.586645,29.0862862 486.287311,30.4729095 485.926348,31.8463267 C485.600602,32.7311244 485.301267,33.6247261 485.023943,34.5227297 C484.302018,35.9445687 483.602104,37.3840157 483.06066,38.8850904 C482.809748,39.3164843 482.563237,39.7478782 482.316726,40.179272 C484.147949,40.5050185 486.01879,40.4081749 487.872023,40.5314303 C488.334231,40.7251174 488.809644,40.9055985 489.293862,41.0728737 C490.500004,41.8476219 491.824999,42.7060077 492.212374,44.1938764 C493.035544,46.0427074 492.53812,48.0984314 492.097922,49.9780762 C491.006231,52.4960079 488.615957,53.913445 486.199271,54.9435079 C482.994631,55.7270601 479.693147,55.4145196 476.426879,55.4673434 C476.387261,55.7182562 476.303623,56.2200817 476.264005,56.4709945 C475.894239,57.1973209 475.572895,57.9456573 475.291168,58.7116015 C474.978628,59.437928 474.688097,60.1730584 474.419577,60.9125908 C474.102634,61.6389172 473.807701,62.3740476 473.539181,63.11358 C473.222238,63.8399065 472.927306,64.5750369 472.658785,65.3145693 C472.341843,66.0408957 472.04691,66.7760261 471.778389,67.5155585 C471.461447,68.241885 471.166514,68.9770154 470.897994,69.7209498 C470.581051,70.4428742 470.286119,71.1736027 470.022,71.917537 C469.700656,72.6438635 469.405723,73.3745919 469.1328,74.1141243 C468.807054,74.8712646 468.503317,75.6372089 468.265611,76.425163 C468.120345,76.5748303 467.825413,76.8653609 467.680147,77.0150281 C471.514271,77.1779013 475.396816,76.6672718 479.164909,77.5564715 C480.062913,78.0098753 480.965319,78.4632791 481.867724,78.9254868 C482.360746,79.704637 482.866973,80.4749832 483.368799,81.2497315 C483.359995,83.0193268 483.690143,84.8901677 482.959415,86.5629195 C482.607257,87.5093449 481.995382,88.3237109 481.45834,89.1644888 C480.305022,90.0096687 479.147301,90.8548485 477.857522,91.4799295 C474.142252,92.4747766 470.259707,91.9729511 466.465201,92.0962065 C462.639882,91.9553432 458.730925,92.5055905 454.993645,91.4799295 C452.673803,90.4718764 450.648893,88.8387424 449.557202,86.5100958 C449.328299,84.6700687 448.615179,82.7860219 449.341505,80.9592009 C449.711271,78.8990749 450.587265,77.0150281 451.392827,75.1045695 C451.700965,74.378243 451.995898,73.6475146 452.264419,72.9035802 C452.576959,72.1772538 452.876294,71.4465253 453.149216,70.702591 C453.457355,69.9762645 453.752287,69.2455361 454.02521,68.5016017 C454.337751,67.7752753 454.632683,67.0445468 454.905606,66.3006125 C455.218146,65.574286 455.513079,64.8435576 455.7816,64.0996232 C457.000948,61.2427392 458.017805,58.2978156 459.325192,55.4761473 C456.384671,55.6654324 452.810264,55.0403515 451.335601,52.1526536 C451.13311,51.0081392 450.622481,49.8856346 450.833776,48.7059044 C451.005453,47.8034988 451.225552,46.9098972 451.317993,45.9986876 C452.405282,43.665639 454.42579,42.0192991 456.758839,41.0244519 C459.303182,40.2408997 461.970781,40.4698026 464.59436,40.3465472 C466.073425,39.7654861 466.055817,37.6481344 466.790948,36.3671587 C467.103488,35.6452342 467.398421,34.9101038 467.671343,34.1661694 C467.983884,33.439843 468.283218,32.7091145 468.556141,31.9651802 C468.868682,31.2388537 469.168016,30.4993213 469.423331,29.746583 C469.854725,28.8573833 470.294923,27.9725857 470.735121,27.087788 C471.976478,25.6351351 473.332288,24.2749237 474.842166,23.0995955 Z M134.542817,39.6554366 C136.682178,39.4441416 138.839148,39.585005 140.982911,39.6466327 C142.840546,40.2981255 144.698181,40.9496183 146.406149,41.9444654 C148.171342,43.5115698 149.839692,45.2151355 150.94899,47.3280851 C151.464022,49.3485933 152.111113,51.3999152 151.90422,53.5128649 C151.609287,55.9119432 150.812529,58.205374 150.020173,60.4767949 C147.629899,65.9264443 145.494939,71.4905451 143.33797,77.0326361 C147.295348,77.1514895 151.301149,76.6848797 155.192498,77.5476675 C156.627543,78.1683465 157.860097,79.1323798 158.872552,80.320914 C159.788163,82.5835309 159.400789,85.0442369 158.766904,87.3244618 C157.62239,88.7595068 156.3106,90.0580904 154.73029,91.0045158 C153.810276,91.2818405 152.899067,91.5943809 152.014269,91.9685491 C145.041535,92.1754421 138.055595,92.1666381 131.082861,91.9773531 C129.608199,91.1938009 128.03229,90.5291021 126.790932,89.3889897 C125.888527,88.4029465 125.298662,87.1880004 124.669179,86.0302801 C124.603149,85.0662468 124.501904,84.1066155 124.255393,83.177798 C124.537119,82.2621865 124.620757,81.3069572 124.669179,80.3561298 C124.735208,80.2548843 124.87167,80.0479913 124.942101,79.9467458 C125.144592,79.2072134 125.386701,78.480887 125.6068,77.7457566 C126.258293,76.3019076 126.834952,74.8228428 127.398405,73.3437781 C127.715348,72.6174516 128.014682,71.8867232 128.283203,71.1427888 C128.600146,70.4164624 128.895078,69.6857339 129.163599,68.9417996 C129.480541,68.2198751 129.779876,67.4891467 130.048396,66.7496143 C130.360937,66.0188858 130.65587,65.2837554 130.933194,64.544223 C131.245735,63.8178966 131.540667,63.0871682 131.81359,62.3476358 C132.738005,60.5296187 133.200213,58.5443264 132.988918,56.5018083 C132.289004,55.7622759 131.483441,55.1459989 130.616252,54.6221635 C130.004377,54.5781437 129.401306,54.52532 128.798235,54.4592903 C125.171004,54.1555538 122.384552,56.8759765 120.447681,59.6096051 C119.937052,60.4459811 119.46604,61.3087688 119.003832,62.1759586 C115.548279,70.0070784 112.581346,78.0450911 109.345892,85.9730544 C108.778036,86.866656 108.227789,87.7734636 107.739169,88.711085 C106.264507,90.4586705 104.521323,91.981755 102.359952,92.804925 C101.571998,92.9017685 100.797249,93.0514358 100.031305,93.2363189 C98.8867907,93.5488594 97.790698,92.9457883 96.6681935,92.813729 C95.2419525,92.2062559 94.0490163,91.2158108 93.0541692,90.0448845 C92.9177078,89.8027757 92.6359812,89.318558 92.4995199,89.0764492 C92.1649695,86.5629195 92.4510981,84.0273799 93.489965,81.7075372 C93.8157114,80.9856127 94.119448,80.2504823 94.3923706,79.506548 C94.7049111,78.7802215 94.9998437,78.0494931 95.2683644,77.3055587 C95.5809048,76.5792323 95.8758374,75.8485038 96.1487601,75.1045695 C96.4613005,74.378243 96.7562331,73.6475146 97.0291558,72.9035802 C97.3416962,72.1772538 97.6366288,71.4465253 97.9051495,70.702591 C98.2220919,69.9762645 98.5170245,69.2455361 98.7855452,68.5016017 C99.1024876,67.7752753 99.3974202,67.0445468 99.6615389,66.3006125 C102.315932,59.6976447 104.996737,53.0990789 107.576296,46.4652973 C107.866827,45.8798342 108.157357,45.2943711 108.45229,44.7089079 C109.640824,42.7940473 111.436831,41.4558458 113.461741,40.5182244 C115.781584,40.4257828 118.202672,40.1176444 120.412466,41.0244519 C121.860716,41.9048476 122.992025,43.1594115 123.863617,44.6032604 C124.484296,44.1586606 125.118181,43.7316687 125.743262,43.2958728 C126.953806,42.6311741 128.111526,41.8828377 129.32207,41.222541 C131.030038,40.606264 132.751211,39.989987 134.542817,39.6554366 Z M185.227197,40.1528602 C188.669544,39.37371 192.217539,39.5101713 195.725916,39.6290247 C197.67159,39.8491237 199.555637,40.4257828 201.40887,41.0420598 C203.297319,41.8872397 205.022894,43.0273521 206.730862,44.1850725 C207.787337,45.2063315 208.826204,46.2496004 209.851865,47.3060752 C210.424122,48.2172848 211.022791,49.1064844 211.639068,49.9912821 C212.092472,50.8760798 212.537072,51.7652795 212.994877,52.6456752 C213.584742,54.516516 214.02494,56.4357786 214.372697,58.3638452 C214.487148,60.1114307 214.412314,61.8634181 214.429922,63.6154056 C214.548776,65.8428067 213.672782,67.9425504 213.443879,70.1347357 C212.964064,71.4553293 212.515062,72.7935308 212.096874,74.1405362 C209.913492,79.1411838 206.933353,83.8557027 202.764679,87.4345112 C200.321581,89.1997046 197.67159,90.6655635 194.75748,91.4887334 C189.686401,92.3867371 184.500871,92.0521867 179.368164,92.0037649 C175.842179,91.6339987 172.157723,91.0089178 169.283231,88.7683107 C166.598024,86.4440661 164.441055,83.5651721 163.032421,80.3033061 C162.891558,79.8499023 162.737489,79.4009005 162.579018,78.9563007 C160.981099,73.0840613 161.306846,66.8464578 163.028019,61.0402482 C163.366972,60.3095197 163.666306,59.5567814 163.921621,58.7952391 C164.485074,57.602303 165.074939,56.4269747 165.691216,55.2604504 C168.222354,51.1093847 171.611877,47.56139 175.476815,44.6340743 C175.930218,44.3303378 176.383622,44.0266013 176.832624,43.7184628 C178.272071,42.9349106 179.73793,42.2041822 181.212593,41.4866597 C182.555196,41.0640697 183.897799,40.6238719 185.227197,40.1528602 Z M234.533758,42.1293485 C237.315809,40.9760302 240.168291,39.8183098 243.201254,39.6114168 C246.758052,39.5145733 250.402891,39.2856704 253.788012,40.5886561 C256.468817,41.7419744 258.960337,43.3530985 260.923619,45.5364799 C264.123858,49.7579773 264.991047,55.4101177 263.61763,60.467991 C263.278678,61.1855135 262.970539,61.9162419 262.697617,62.6601762 C262.385076,63.122384 262.085742,63.5933957 261.795211,64.0688094 C261.200944,64.6806844 260.597873,65.2837554 260.003606,65.8956304 C259.396133,66.199367 258.793062,66.5163094 258.194393,66.8376538 C255.302293,67.9689623 251.683866,67.4451269 249.672162,64.9404011 C248.743345,63.0255405 249.302396,60.8509631 248.95464,58.830455 C248.804972,58.0425008 248.743345,57.2413407 248.708129,56.4401806 C248.144676,55.3793038 247.28629,54.318427 246.01852,54.1643577 C244.336964,54.1247399 242.514545,53.8870331 241.039882,54.8950862 C238.944541,55.8855313 237.522702,57.7519702 236.237324,59.6052032 C235.876362,60.1730584 235.533007,60.7409136 235.189653,61.3131708 C234.463326,62.8538633 233.80303,64.4649874 233.710588,66.186161 C233.015076,68.9197897 233.472881,72.0319885 235.194055,74.3034094 C237.042886,76.231476 239.873358,76.5660263 242.373682,77.0018222 C248.100656,77.0986657 253.836434,76.9930182 259.56781,77.045842 C261.042473,77.2043132 262.486322,77.6180992 263.921367,77.9966693 C264.713723,78.5777305 265.497275,79.1719976 266.232405,79.8366964 C266.351259,80.0832072 266.593368,80.5806307 266.712221,80.8315435 C266.826672,81.7031352 267.033565,82.561521 267.200841,83.4287108 C266.963134,84.7360984 266.681407,86.0390841 266.276425,87.3112558 C265.770198,87.9099249 265.294784,88.5306039 264.836978,89.1644888 C264.216299,89.6090886 263.613228,90.0712964 263.023363,90.54671 C262.807666,90.6655635 262.37187,90.8988683 262.156173,91.0177217 C260.549451,91.5591651 258.938327,92.188648 257.208349,92.0653926 C248.93263,92.0609906 240.652508,92.2370698 232.381191,91.9553432 C231.782522,91.7308423 231.170647,91.576773 230.55437,91.4315077 C229.68718,91.0441336 228.79798,90.7095832 227.908781,90.3882388 C226.671825,89.6046866 225.470084,88.7683107 224.329972,87.8482972 C223.066604,86.8446461 222.243434,85.431611 221.151744,84.2694887 C220.363789,82.8212378 219.633061,81.342173 218.915538,79.8587062 C216.56048,72.8683644 217.220777,65.1869119 219.813542,58.3594433 C220.394603,57.175311 220.975664,55.9911788 221.605147,54.8334585 C222.084963,54.120338 222.516357,53.3808056 222.938947,52.6368712 C225.443673,49.2517497 228.445822,46.2231885 231.844149,43.7360707 C232.755359,43.2298432 233.64896,42.6839978 234.533758,42.1293485 Z M353.756944,39.6686425 C358.326198,39.4221317 363.040717,39.2812684 367.363459,41.0464618 C371.765438,42.9789304 375.476306,46.3112281 377.879786,50.4754998 C378.069071,50.9068937 378.26716,51.3338856 378.465249,51.7652795 C378.73377,52.5224198 379.037506,53.2707561 379.385263,54.0014845 C381.18127,60.1642544 380.507767,66.7628202 378.496063,72.7935308 C378.152709,73.5198572 377.848972,74.2637916 377.598059,75.0253339 C376.898145,76.5132026 376.163014,77.9790614 375.392668,79.4273124 C373.011198,83.3186613 369.947421,86.8182343 366.042866,89.2349205 C365.158068,89.6795203 364.277672,90.1241201 363.397277,90.5687199 C362.481665,90.8460446 361.574858,91.1497811 360.685658,91.4887334 C355.636589,92.3823351 350.47747,92.0433827 345.371175,92.0125689 C343.909718,92.0874025 342.531899,91.4799295 341.074844,91.4931354 C339.644201,90.956094 338.12992,90.6039358 336.818131,89.8027757 C334.348621,88.3281129 332.460172,86.1007118 330.756606,83.8292909 C330.140329,82.6627666 329.554866,81.4874383 328.960599,80.31211 C327.146984,75.1353833 327.173396,69.5228607 328.075801,64.1788588 C328.269488,63.5757878 328.410352,62.9595108 328.555617,62.3432338 C328.859353,61.4628381 329.149884,60.5780404 329.422807,59.6888408 C330.272389,57.9104414 331.139578,56.1408461 332.086004,54.4108685 C332.394142,53.9662687 332.702281,53.5172669 333.010419,53.0726671 C333.468225,52.4872039 333.912825,51.8885349 334.331013,51.2722579 C336.545208,48.9083954 338.763805,46.5049152 341.427002,44.6340743 C341.876004,44.3347398 342.320604,44.0310032 342.769606,43.7184628 C346.167933,41.7507784 349.874399,40.3113314 353.756944,39.6686425 Z M400.884526,40.1484582 C403.596144,39.2724645 407.029688,38.9863359 409.283501,41.0640697 C410.348779,41.9136516 411.004674,43.1197937 411.620951,44.3039259 C411.722197,46.1923747 411.664971,48.0852254 411.075106,49.8988406 C410.419211,51.3470915 409.833748,52.8261563 409.279099,54.314025 C408.953352,55.0359495 408.65842,55.7710799 408.394301,56.5150143 C408.077359,57.2369387 407.778024,57.9676672 407.518307,58.7160035 C406.906432,60.1730584 406.307763,61.6389172 405.757516,63.117982 C405.436171,63.8399065 405.136837,64.5750369 404.872718,65.3189713 C404.551374,66.0452977 404.260843,66.7804281 404.005528,67.5331664 C403.789831,67.9997762 403.582938,68.4707879 403.376045,68.9417996 C403.243986,69.3555855 403.107525,69.7693715 402.966661,70.1787555 C402.821396,70.6189534 402.680533,71.0591512 402.535268,71.4949471 C402.372394,71.930743 402.200717,72.3665388 402.033442,72.8023347 C401.65047,73.9380452 401.544822,75.1573932 402.209521,76.222672 C403.2748,77.2175191 404.767071,77.0546459 406.114076,77.0546459 C408.143388,77.1646954 410.102269,76.4119571 411.893874,75.5183554 C413.918784,74.1625461 415.507898,72.1992637 416.190205,69.8398032 C416.493941,69.1090748 416.788874,68.3739443 417.061797,67.63001 C417.369935,66.9036835 417.664868,66.1729551 417.942192,65.4290207 C418.250331,64.7026943 418.545263,63.9675639 418.822588,63.2280315 C419.130727,62.501705 419.425659,61.7665746 419.702984,61.0270422 C420.011122,60.3007158 420.306055,59.5655854 420.583379,58.826053 C420.891518,58.0953245 421.186451,57.3645961 421.463775,56.6206617 C421.767512,55.8943353 422.066846,55.1636069 422.339769,54.4240745 C422.647907,53.697748 422.951644,52.9626176 423.224567,52.2230852 C423.532705,51.4923568 423.827638,50.7528244 424.087354,50.0000861 C424.769661,48.5034134 425.491585,47.0243486 426.292746,45.5893036 C426.600884,45.1358998 426.900219,44.6780941 427.199553,44.2158863 C428.550961,42.6267721 430.289742,41.4426399 432.151779,40.5182244 C433.872953,40.394969 435.607332,40.3729591 437.332908,40.5094204 C438.745943,41.1917271 439.960889,42.1865742 441.004158,43.3486966 C441.105403,43.5820014 441.307894,44.0530131 441.40914,44.29072 C441.585219,44.7573297 441.783308,45.2239394 441.990201,45.6861472 C442.241114,48.5474332 440.938128,51.2018262 440.106154,53.8694252 C439.776006,54.5913497 439.472269,55.3264801 439.199347,56.0704144 C438.886806,56.7967409 438.591873,57.5318713 438.323353,58.2714037 C438.00641,58.9977301 437.711478,59.7284586 437.442957,60.4723929 C437.126015,61.1987194 436.831082,61.9294478 436.558159,62.6689802 C436.245619,63.3953067 435.950686,64.1304371 435.677764,64.8699695 C435.360821,65.5962959 435.065889,66.3314263 434.810574,67.0797627 C433.344715,70.3460307 432.050533,73.6871324 430.787166,77.0326361 C435.20235,77.1338816 439.714378,76.6012422 443.993101,77.9922674 C444.811869,78.7846235 445.780304,79.5153519 446.220502,80.6114446 C446.471415,81.4434185 446.546249,82.3238142 446.779554,83.1689941 C446.467013,84.5556173 446.34816,85.9818583 445.885952,87.3332657 C445.053978,88.6362514 443.988699,89.7587559 442.659302,90.555514 C442.051829,90.8548485 441.448758,91.1541831 440.85449,91.4667236 C438.010812,92.3251094 435.017467,92.0433827 432.090151,92.0962065 C428.145979,92.0653926 424.201806,92.184246 420.262035,91.986157 C418.606891,91.2422226 417.237876,90.0536885 416.06695,88.6934771 C416.040538,88.504192 415.983312,88.1212199 415.952498,87.9319348 C415.04569,88.8343404 414.108069,89.7059322 413.157242,90.559916 C412.554171,90.8460446 411.955502,91.1365752 411.365636,91.4271057 C410.894625,91.5943809 410.432417,91.774862 409.979013,91.9685491 C404.480942,92.1798441 398.969665,92.1666381 393.471594,91.9641471 C393.000582,91.774862 392.533972,91.6031849 392.062961,91.4447137 C390.284561,90.6435536 388.506162,89.732344 387.132745,88.3193089 C385.706504,86.9458916 384.83051,85.1454824 383.98533,83.384691 C383.347043,81.2497315 383.360249,79.0179284 383.492309,76.8125371 C383.914899,74.7259993 384.645627,72.7186971 385.34114,70.7069929 C385.671288,69.9850685 385.970623,69.2499381 386.243545,68.5060037 C386.556086,67.7796772 386.851018,67.0489488 387.119539,66.3050144 C387.432079,65.578688 387.731414,64.8479596 388.004337,64.1040252 C388.312475,63.3776987 388.61181,62.6469703 388.884732,61.9030359 C389.197273,61.1767095 389.492205,60.4459811 389.765128,59.7020467 C390.077668,58.9757202 390.372601,58.2449918 390.645524,57.5010574 C390.958064,56.774731 391.252997,56.0440026 391.525919,55.3000682 C391.83846,54.5737417 392.133392,53.8430133 392.406315,53.0990789 C392.714454,52.3727525 393.013788,51.6420241 393.291113,50.9024917 C393.599251,50.1673613 393.898586,49.4322309 394.149499,48.6750906 C394.712952,47.4865564 395.307219,46.3112281 395.901486,45.1358998 C397.182462,43.1374016 398.890429,41.4338359 400.884526,40.1484582 Z M185.09954,56.1320421 C186.671046,55.0359495 188.511073,54.3976626 190.403924,54.1731617 C191.469202,54.1467498 192.477256,54.5649378 193.529328,54.6661833 C195.294522,55.5201671 196.711959,56.977222 197.614364,58.7071996 C198.93936,63.320473 197.957719,68.4707879 195.237296,72.4105586 C194.180821,74.0701045 192.719364,75.4655317 190.954171,76.3415254 C187.974032,77.5828834 184.536086,77.5432656 181.542741,76.3635353 C180.358609,75.5095515 179.095241,74.5587241 178.593415,73.1280811 C177.448901,69.663724 178.144414,65.8560126 179.720322,62.6337644 C180.988092,60.0938228 182.757687,57.7739801 185.09954,56.1320421 L185.09954,56.1320421 Z M352.726881,55.0975772 C354.544898,54.52532 356.50818,53.7593757 358.409835,54.4768982 C360.786904,54.8246545 362.530087,56.7615251 363.58216,58.7952391 C364.634233,62.4136655 364.158819,66.3402303 362.662146,69.7649695 C362.331998,70.3768446 361.988644,70.9843176 361.627681,71.5741827 C361.332749,72.0099786 361.04662,72.4457745 360.760492,72.8859723 C359.897704,74.2021639 358.753189,75.3158644 357.388576,76.1038186 C355.830276,76.9666064 354.069484,77.0898618 352.343909,77.3275686 C349.667506,77.1338816 346.432052,76.6848797 345.010213,74.0701045 C343.011714,70.482492 344.015365,66.1069254 345.679313,62.5941466 C347.246418,59.4951537 349.56626,56.6558776 352.726881,55.0975772 Z M497.235031,76.2666918 C499.444824,74.8668626 502.024384,74.6071459 504.581933,74.8624607 C505.061749,75.0517457 505.550368,75.2278249 506.052194,75.3906981 C508.099114,76.4031531 509.807082,77.9878654 511.000018,79.9335399 C512.109316,82.4162558 512.347023,85.1939042 511.453422,87.7866695 C511.136479,88.3853386 510.832743,88.9928116 510.542212,89.6002847 C509.542963,90.7271912 508.464478,91.774862 507.363984,92.7917191 C504.674375,94.1783423 501.408107,94.2091562 498.582036,93.2451229 C498.361938,93.1174655 497.917338,92.8709547 497.697239,92.7476993 C495.311366,91.2642325 493.656223,88.7947226 493.083965,86.05229 C493.00473,84.7845202 493.057553,83.5079464 493.083965,82.2357746 C493.27325,81.7647629 493.453732,81.2893493 493.634213,80.8139356 C493.915939,80.2108645 494.210872,79.6121955 494.501402,79.0135264 C495.395004,78.0803069 496.306214,77.1646954 497.235031,76.2666918 Z" />
    </svg>
)

export default KnockoutIcon