import React from 'react';

const IconLink = ({ fill }) => {
  fill = '#ED2332';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon-link" viewBox='0 0 16 16'>
      <path className="icon-link-path" fill={fill} fillRule="evenodd" d="M4.625,11.4375 C4.52083281,11.3437495 4.46875,11.2291673 4.46875,11.09375 C4.46875,10.9583327 4.52083281,10.8385422 4.625,10.734375 L10.671875,4.640625 C10.7760422,4.53645781 10.8958327,4.484375 11.03125,4.484375 C11.1666673,4.484375 11.2864578,4.53645781 11.390625,4.640625 C11.4843755,4.73437547 11.53125,4.84895766 11.53125,4.984375 C11.53125,5.11979234 11.4843755,5.23958281 11.390625,5.34375 L5.328125,11.4375 C5.27604141,11.4895836 5.21875031,11.5286457 5.15625,11.5546875 C5.09374969,11.5807293 5.03125031,11.59375 4.96875,11.59375 C4.90624969,11.59375 4.84375031,11.5807293 4.78125,11.5546875 C4.71874969,11.5286457 4.66666687,11.4895836 4.625,11.4375 Z M7.4375,10.375 L8.234375,9.59375 C8.48437625,10.187503 8.55729219,10.799476 8.453125,11.4296875 C8.34895781,12.059899 8.05208578,12.6145809 7.5625,13.09375 L5.546875,15.046875 C5.23437344,15.3697933 4.87760617,15.6093742 4.4765625,15.765625 C4.07551883,15.9218758 3.66666875,16 3.25,16 C2.83333125,16 2.42448117,15.9218758 2.0234375,15.765625 C1.62239383,15.6093742 1.26562656,15.3697933 0.953125,15.046875 C0.630206719,14.7343734 0.390625781,14.3776062 0.234375,13.9765625 C0.0781242187,13.5755188 0,13.1666687 0,12.75 C0,12.3333313 0.0781242187,11.9270853 0.234375,11.53125 C0.390625781,11.1354147 0.630206719,10.7760433 0.953125,10.453125 L2.921875,8.421875 C3.23437656,8.10937344 3.59114383,7.87239664 3.9921875,7.7109375 C4.39323117,7.54947836 4.80208125,7.46875 5.21875,7.46875 C5.45833453,7.46875 5.69270719,7.49479141 5.921875,7.546875 C6.15104281,7.59895859 6.37499891,7.67708281 6.59375,7.78125 L5.8125,8.5625 C5.71874953,8.53124984 5.62239633,8.50781258 5.5234375,8.4921875 C5.42447867,8.47656242 5.32291719,8.46875 5.21875,8.46875 C4.91666516,8.46875 4.62760555,8.52604109 4.3515625,8.640625 C4.07551945,8.75520891 3.83333438,8.91666563 3.625,9.125 L1.65625,11.171875 C1.21874781,11.5989605 1,12.1249969 1,12.75 C1,13.3750031 1.21874781,13.9062478 1.65625,14.34375 C1.87500109,14.5520844 2.11979031,14.7135411 2.390625,14.828125 C2.66145969,14.9427089 2.94791516,15 3.25,15 C3.55208484,15 3.83854031,14.9427089 4.109375,14.828125 C4.38020969,14.7135411 4.62499891,14.5520844 4.84375,14.34375 L6.859375,12.390625 C7.14062641,12.1093736 7.32812453,11.7942726 7.421875,11.4453125 C7.51562547,11.0963524 7.52083375,10.7395852 7.4375,10.375 Z M15.046875,0.953125 C15.3697933,1.26562656 15.6093742,1.62239383 15.765625,2.0234375 C15.9218758,2.42448117 16,2.83333125 16,3.25 C16,3.66666875 15.9218758,4.07291469 15.765625,4.46875 C15.6093742,4.86458531 15.3697933,5.22395672 15.046875,5.546875 L13.03125,7.5625 C12.7187484,7.87500156 12.3619812,8.11197836 11.9609375,8.2734375 C11.5598938,8.43489664 11.1510438,8.515625 10.734375,8.515625 C10.5260406,8.515625 10.3177094,8.50000016 10.109375,8.46875 C9.90104063,8.43749984 9.69791766,8.38020875 9.5,8.296875 L10.296875,7.5 C10.369792,7.51041672 10.442708,7.515625 10.515625,7.515625 L10.734375,7.515625 C11.0364598,7.515625 11.3255195,7.45833391 11.6015625,7.34375 C11.8776055,7.22916609 12.1197906,7.06770937 12.328125,6.859375 L14.34375,4.828125 C14.7812522,4.40103953 15,3.87500313 15,3.25 C15,2.62499687 14.7812522,2.09375219 14.34375,1.65625 C14.1249989,1.44791563 13.8802097,1.28645891 13.609375,1.171875 C13.3385403,1.05729109 13.0520848,1 12.75,1 C12.4479152,1 12.1614597,1.05729109 11.890625,1.171875 C11.6197903,1.28645891 11.3750011,1.44791563 11.15625,1.65625 L9.140625,3.609375 C8.83854016,3.91145984 8.64322961,4.26301883 8.5546875,4.6640625 C8.46614539,5.06510617 8.47916609,5.45833141 8.59375,5.84375 L7.8125,6.625 C7.52083187,6.02083031 7.42708281,5.37500344 7.53125,4.6875 C7.63541719,3.99999656 7.9374975,3.4062525 8.4375,2.90625 L10.453125,0.953125 C10.7656266,0.630206719 11.1223938,0.390625781 11.5234375,0.234375 C11.9244812,0.0781242187 12.3333313,0 12.75,0 C13.1666687,0 13.5755188,0.0781242187 13.9765625,0.234375 C14.3776062,0.390625781 14.7343734,0.630206719 15.046875,0.953125 Z"></path>
    </svg>
  );
};

export default IconLink;
