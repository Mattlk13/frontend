import React from 'react';

const IconReps = ({ fill }) => {
  fill = '#353E42';
  return (
    <svg className="icon-reps" viewBox="37 0 24 25" >
        <path className="icon-reps-path" fill={fill} d="M54.484375,20.0703125 L55.1171875,20.421875 C55.5390646,20.6562512 55.75,20.9609356 55.75,21.3359375 L55.75,23.234375 C55.75,23.5937518 55.6250012,23.89453 55.375,24.1367188 C55.1249988,24.3789075 54.8281267,24.5 54.484375,24.5 L38.265625,24.5 C37.9218733,24.5 37.6250012,24.3789075 37.375,24.1367188 C37.1249988,23.89453 37,23.5937518 37,23.234375 L37,21.3359375 C37,20.9921858 37.2109354,20.6953138 37.6328125,20.4453125 L38.265625,20.0703125 L43.1171875,17.4453125 C42.226558,16.742184 41.6093767,15.8046934 41.265625,14.6328125 C40.9218733,13.4609316 40.75,12.5312534 40.75,11.84375 L40.75,8.6796875 C40.75,8.14843484 40.9140609,7.62109637 41.2421875,7.09765625 C41.5703141,6.57421613 41.9999973,6.10156461 42.53125,5.6796875 C43.0625027,5.25781039 43.6679654,4.91406383 44.3476562,4.6484375 C45.0273471,4.38281117 45.7109341,4.25 46.3984375,4.25 C47.101566,4.25 47.7890591,4.38281117 48.4609375,4.6484375 C49.1328159,4.91406383 49.7304661,5.25781039 50.2539062,5.6796875 C50.7773464,6.10156461 51.1992171,6.57421613 51.5195312,7.09765625 C51.8398454,7.62109637 52,8.14843484 52,8.6796875 L52,11.84375 C52,12.6093788 51.8476578,13.5624943 51.5429688,14.703125 C51.2382797,15.8437557 50.6484419,16.7656215 49.7734375,17.46875 L54.484375,20.0703125 Z M54.25,23 L54.25,21.6640625 C54.2031248,21.6171873 54.1484378,21.5781252 54.0859375,21.546875 L53.8984375,21.453125 C53.8828124,21.453125 53.8632814,21.4453126 53.8398438,21.4296875 C53.8164061,21.4140624 53.7890627,21.3984376 53.7578125,21.3828125 L49.046875,18.78125 C48.8281239,18.6562494 48.6484382,18.4882823 48.5078125,18.2773438 C48.3671868,18.0664052 48.2890626,17.8359388 48.2734375,17.5859375 C48.2421873,17.3359363 48.2773432,17.0937512 48.3789062,16.859375 C48.4804693,16.6249988 48.6328115,16.4296883 48.8359375,16.2734375 C49.4765657,15.773435 49.9140613,15.0585984 50.1484375,14.1289062 C50.3828137,13.1992141 50.5,12.437503 50.5,11.84375 L50.5,8.6796875 C50.5,8.13280977 50.0898479,7.50781602 49.2695312,6.8046875 C48.4492146,6.10155898 47.492193,5.75 46.3984375,5.75 C45.3359322,5.75 44.3789105,6.10155898 43.5273438,6.8046875 C42.675777,7.50781602 42.25,8.13280977 42.25,8.6796875 L42.25,11.84375 C42.25,12.437503 42.3906236,13.1992141 42.671875,14.1289062 C42.9531264,15.0585984 43.4140593,15.773435 44.0546875,16.2734375 C44.2421884,16.4296883 44.3867182,16.6249988 44.4882812,16.859375 C44.5898443,17.0937512 44.6250002,17.3359363 44.59375,17.5859375 C44.5781249,17.8359388 44.5000007,18.0664052 44.359375,18.2773438 C44.2187493,18.4882823 44.0390636,18.648437 43.8203125,18.7578125 L38.96875,21.40625 C38.9531249,21.40625 38.9375001,21.4101562 38.921875,21.4179688 C38.9062499,21.4257813 38.8906251,21.4374999 38.875,21.453125 C38.8124997,21.4687501 38.7460941,21.4999998 38.6757812,21.546875 L38.5,21.6640625 L38.5,23 L54.25,23 Z M59.734375,16.34375 L60.3671875,16.6953125 C60.7890646,16.9296887 61,17.2343731 61,17.609375 L61,19.484375 C61,19.8437518 60.8750012,20.14453 60.625,20.3867188 C60.3749988,20.6289075 60.0781267,20.75 59.734375,20.75 L57.25,20.75 C57.1562495,20.4218734 57.0585943,20.1328138 56.9570312,19.8828125 C56.8554682,19.6328112 56.6953136,19.4218759 56.4765625,19.25 L59.5,19.25 L59.5,17.9140625 C59.4531248,17.8828123 59.3984378,17.8476564 59.3359375,17.8085938 C59.2734372,17.7695311 59.2109378,17.7421876 59.1484375,17.7265625 C59.1328124,17.7109374 59.1132814,17.6992188 59.0898438,17.6914062 C59.0664061,17.6835937 59.0390627,17.6718751 59.0078125,17.65625 L54.2265625,15.0546875 C54.0078114,14.9296869 53.8281257,14.7617198 53.6875,14.5507812 C53.5468743,14.3398427 53.4687501,14.1093763 53.453125,13.859375 C53.4218748,13.6093737 53.4570307,13.3671887 53.5585938,13.1328125 C53.6601568,12.8984363 53.812499,12.7031258 54.015625,12.546875 C54.6562532,12.0312474 55.1054675,11.3085984 55.3632812,10.3789062 C55.621095,9.4492141 55.75,8.69531539 55.75,8.1171875 L55.75,4.953125 C55.75,4.39062219 55.3281292,3.75781602 54.484375,3.0546875 C53.6406208,2.35155898 52.6718805,2 51.578125,2 C51.0468723,2 50.5351587,2.08593664 50.0429688,2.2578125 C49.5507788,2.42968836 49.109377,2.66406102 48.71875,2.9609375 C48.4218735,2.86718703 48.1093766,2.81250008 47.78125,2.796875 C47.4531234,2.78124992 47.1328141,2.76562508 46.8203125,2.75 C47.3671902,2.1093718 48.0703082,1.57031469 48.9296875,1.1328125 C49.7890668,0.695310312 50.6718705,0.4765625 51.578125,0.4765625 C52.2812535,0.4765625 52.9726529,0.613279883 53.6523438,0.88671875 C54.3320346,1.16015762 54.9374973,1.50781039 55.46875,1.9296875 C56.0000027,2.35156461 56.4296859,2.82812234 56.7578125,3.359375 C57.0859391,3.89062766 57.25,4.42187234 57.25,4.953125 L57.25,8.1171875 C57.25,8.86719125 57.0859391,9.81640051 56.7578125,10.9648438 C56.4296859,12.113287 55.8281294,13.0312466 54.953125,13.71875 L59.734375,16.34375 Z"></path>
    </svg>
  );

};

export default IconReps;