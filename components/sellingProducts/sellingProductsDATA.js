const { model } = require('mongoose');
const SellingProductsModel  = require('./sellingProductsModel');
addExample = async () => {
    const addTest = new SellingProductsModel({
        keywords: ['Chaise', 'Bureau', 'Bois', 'Métal'],
        name: 'Chaise de bureau',
        rawMaterials: [
            {
                name: 'bois',
            },
            {
                name: 'métal',
            }
        ],
        status: true,
        createDate : Date.now(),
        lastUpteDate : Date.now()
    });
    // console.log('SellingProducts:: ', test);
}
module.exports = addExample;

// SellingProducts.createCollection()
    // .then(function(SellingProducts) {
    //     SellingProducts.create({
    //         keywords: ['Chaise', 'Bureau', 'Bois', 'Métal'],
    //         name: 'Chaise de bureau',
    //         rawMaterials: [
    //             {
    //                 name: 'bois',
    //             },
    //             {
    //                 name: 'métal',
    //             }
    //         ],
    //         status: true,
    //         createDate : Date.now(),
    //         lastUpteDate : Date.now()
    //     })
    // });
// const SellingProductsData =    SellingProducts(
//         {
//             keywords: ['Chaise', 'Bureau', 'Bois', 'Métal'],
//             name: 'Chaise de bureau',
//             rawMaterials: [
//                 {
//                     name: 'bois',
//                 },
//                 {
//                     name: 'métal',
//                 }
//             ],
//             status: true,
//             createDate : Date.now(),
//             lastUpteDate : Date.now()
//         }
//     )
// console.log('SellingProducts:: ', SellingProducts.find());
// console.log('SellingProductsModel:: ', SellingProducts);
// const FirstSellingProduct = new SellingProductsModel(
//     {
//     keywords: ['Chaise', 'Bureau', 'Bois', 'Métal'],
//     // draws : [{
//     //     file : {   
//     //         // _id : 'fw',
//     //         // length : 'f',   
//     //         // chunkSize: 'f',
//     //         // uploadDate : 'f',
//     //         // md5 : 'f',
//     //         // filename : 'f',   
//     //         // contentType : 'f',
//     //         // aliases : 'f',
//     //         // metadata : 'f',
//     //     },
//     //     chunks : {   
//     //         // _id :'q',
//     //         // files_id :'q',
//     //         // n :'q',
//     //         // data :  'q',
//     //     }
//     // }
//     // ],
//     name: 'Chaise de bureau',
//     rawMaterials: [
//         {
//             name: 'bois',
//         },
//         {
//             name: 'métal',
//         }
//     ],
//     status: true,
//     createDate : Date.now(),
//     lastUpteDate : Date.now()}
// ).find();
// const sellingProductsDATA = [
//     {

//     }
// ]
// model.exports = FirstSellingProduct;