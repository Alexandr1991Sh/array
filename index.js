let a = [1, 2, 3, 4, 5];
console.log(a)

let t = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = t;
console.log(a)

//max
let b = [12, 34, 2, 56, 12, 78, 123];
let max = b[0];
for (let i = 0; i < b.length; i++) {
    if (b[i] > max) {
        max = b[i];
    }
}
console.log('max ' + max)

//sum
let sum = 0;
for (let i = 0; i < b.length; i++) {
    sum = sum + b[i]
}
console.log('sum ' + sum)


document.querySelector('.b1').onclick = () => {
    let ar1 = ['строка', 123, true, false];
    let out = ' ';
    for (let i = 0; i < ar1.length; i++) {
        out += ar1[i] + ' - ';
    }
    document.querySelector('.out1').innerHTML = out;
}

document.querySelector('.b3').onclick = () => {
    let ar3 = [1, true, 'Alexander', true, 31];
    // let out = ' ';
    // for (let i = 0; i < ar3.length; i++) {
    //     out += ar3[0];
    // }
    document.querySelector('.out3').innerHTML = ar3.length;
}

document.querySelector('.b4').onclick = () => {
    let ar4 = [1, true, 'Alexander', true, 31, 4, 3, 545, 7, 8];

    document.querySelector('.out4').innerHTML = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
}

document.querySelector('.b5').onclick = () => {
    let ar5 = [1, 31, 4, 3, 545, 7, 8];
    let sum = ar5[0] + ar5[2] + ar5[3];
    document.querySelector('.out5').innerHTML = sum;
}

ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
document.querySelector('.b7').onclick = () => {
    ar7[7] = 'vietnam';
    ar7[6] = 'turkey';
    ar7[5] = 'italy';
    let out = ' ';
    for (let i = 0; i < ar7.length; i++) {
        out += ar7[i] + ' ';
    }
    document.querySelector('.out7').innerHTML = out;
}


document.querySelector('.b8').onclick = () => {
    let ar8 = [];
    let out1 = ' ';
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;
    for (let i = 0; i < ar8.length; i++) {
        out1 += ar8[i] + ' - ';
    }
    document.querySelector('.out8').innerHTML = out1;
    document.querySelector('.out8-1').innerHTML = ar8.length;
}

document.querySelector('.b9').onclick = () => {
    ar9 = [100, 200, 300, 400, 700, 121];
    document.querySelector('.out9').innerHTML = ar9.length - 1;
    document.querySelector('.out9-1').innerHTML = ar9[5];
}

document.querySelector('.b10').onclick = () => {
    ar10 = [100, 200, 300, 400, 700, 121];
    let a = ar10[ar10.length - 1];
    let sum = ar10[0] + a;
    document.querySelector('.out10').innerHTML = sum;
}

document.querySelector('.b11').onclick = () => {
    ar11 = [2, 3, 4, 5, 6, 7];
    ar11[2] = 6;
    ar11[4] = 4;
    document.querySelector('.out11').innerHTML = ar11;
}


document.querySelector('.b12').onclick = () => {
    ar12 = ['test', 'west', 'list', 'class', 'best'];
    let t = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = t;
    let out = ' ';
    for (let i = 0; i < ar12.length; i++) {
        out += ar12[i] + ' - ';
    }
    document.querySelector('.out12').innerHTML = out;
}

document.querySelector('.b13').onclick = () => {
    ar13 = ['test', 'west', 'list', 'class', 'best'];
    let out = ' ';
    for (let i = 0; i < ar13.length; i++) {
        // out += i + ' ' + ar13[i] + ' ';
        out += `${i} ${ar13[i]} `;
    }
    document.querySelector('.out13').innerHTML = out;
}

document.querySelector('.b14').onclick = () => {
    ar14 = [1, 2, 3, 'hello', 66];
    let out = ' ';
    for (let i = ar14.length - 1; i >= 0; i--) {
        out += `${ar14[i]} `;
    }
    document.querySelector('.out14').innerHTML = out;
}

document.querySelector('.b15').onclick = () => {
    ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let out = '';
    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            out += `${ar15[i]} `;
        }
    }
    document.querySelector('.out15').innerHTML = out;
}

document.querySelector('.b16').onclick = () => {
    let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    let ar16_odd = [];
    let ar16_even = [];
    let out_odd = '';
    let out_even = '';
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2) {
            ar16_odd[i] = `${ar16[i]}`;
            out_odd = ar16_odd;
        }
        else {
            ar16_even[i] = `${ar16[i]} `;
            out_even = ar16_even
        }
    }
    document.querySelector('.out16-1').innerHTML = out_odd;
    document.querySelector('.out16-2').innerHTML = out_even;
}

document.querySelector('.b17').onclick = () => {
    ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
    let out = '';
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            out++;
        }
    }
    document.querySelector('.out17').innerHTML = out;
}

document.querySelector('.b18').onclick = () => {
    ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
    let max = ar18[0];
    for (let i = 0; i < ar18.length; i++) {
        if (ar18[i] > max) {
            max = ar18[i];
        }
    }
    document.querySelector('.out18').innerHTML = 'max - ' + max;
}

document.querySelector('.b19').onclick = () => {
    ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
    let min = ar19[0];
    for (let i = 0; i < ar19.length; i++) {
        if (ar19[i] < min) {
            min = ar19[i];
        }
    }
    document.querySelector('.out19').innerHTML = 'min - ' + min;
}

document.querySelector('.b20').onclick = () => {
    ar20 = [4, 5, 6, 7, 8, 9, 10];
    let sum = 0;
    for (let i = 0; i < ar20.length; i++) {
        sum = sum + ar20[i];
    }
    document.querySelector('.out20').innerHTML = 'sum - ' + sum;
}