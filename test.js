let period_t3_21 = 479.41;
let periode_t4_21 = 479.41;
let solde_debi = 958.82;
let periode_t1 = 468.68;
let periode_t2 = 471.44;
let periode_t2_b = 38.59;
let periode_t2_c = 66.92;
let periode_t3 = 471.44;
let periode_t4 = 471.44

let reg = {
    
}

function somme_appels (period_t3_21
,periode_t4_21
,solde_debi
,periode_t1
,periode_t2
,periode_t2_b
,periode_t2_c
,periode_t3,
periode_t4){
    let somme = period_t3_21 + periode_t4_21 + periode_t1 + periode_t2 + periode_t3 + periode_t4
    let t3_21 = period_t3_21 / 3;
    let t4_21 = periode_t4_21 / 3;
    let t1 = periode_t1 / 3;
    let t2 = periode_t2 / 3;
    let t3 = periode_t3 / 3;
    let t4 = periode_t4 / 3;
    return_val = {
        somme : somme,
        moyenne : {
            t3_21 : t3_21,
            t4_21 : t4_21,
            t1 : t1,
            t2 : t2,
            t3 : t3,
            t4 : t4
        }
    }
    return return_val;
}
let somme2 = somme_appels(period_t3_21
,periode_t4_21
,solde_debi
,periode_t1
,periode_t2
,periode_t2_b
,periode_t2_c
,periode_t3
,periode_t4);
console.log("SOMME APPELS ??",somme2);