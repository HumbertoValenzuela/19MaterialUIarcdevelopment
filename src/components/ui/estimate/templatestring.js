// --------------------PLATFORMS-------------------------
// `for ${
//                               //if only web application is selected...
//                               platforms.indexOf("Web Application") > -1 &&
//                               platforms.length === 1
//                                 ? //then finish sentence here
//                                   "a Web Application."
//                                 : //otherwise, if web application and another platform is selected...
//                                 platforms.indexOf("Web Application") > -1 &&
//                                   platforms.length === 2
//                                 ? //then finish the sentence here
//                                   `a Web Application and an ${platforms[1]}.`
//                                 : //otherwise, if only one platform is selected which isn't web application...
//                                 platforms.length === 1
//                                 ? //then finish the sentence here
//                                   `an ${platforms[0]}`
//                                 : //otherwise, if other two options are selected...
//                                 platforms.length === 2
//                                 ? //then finish the sentence here
//                                   "an iOS Application and an Android Application."
//                                 : //otherwise if all three are selected...
//                                 platforms.length === 3
//                                 ? //then finish the sentence here
//                                   "a Web Application, an iOS Application, and an Android Application."
//                                 : null
//                             }`
// -----------------------------------------------------



// --------------------FEATURES-------------------------
//                         {"with "}
//                         {/* if we have features... */}
//                         {features.length > 0
//                           ? //...and there's only 1...
//                             features.length === 1
//                               ? //then end the sentence here
//                               `${features[0]}.`
//                               : //otherwise, if there are two features...
//                             features.length === 2
//                               ? //...then end the sentence here
//                               `${features[0]} and ${features[1]}.`
//                               : //otherwise, if there are three or more features...
//                               features
//                             //filter out the very last feature...
//                             .filter(
//                               (feature, index) =>
//                               index !== features.length - 1
//                             )
//                             //and for those features return their name...
//                             .map((feature, index) => (
//                               <span key={index}>{`${feature}, `}</span>
//                             ))
//                           : null}
//                         {features.length > 0 &&
//                           features.length !== 1 &&
//                           features.length !== 2
//                             ? //...and then finally add the last feature with 'and' in front of it
//                             ` and ${features[features.length - 1]}.`
//                             : null}
// -----------------------------------------------------
