document.addEventListener('DOMContentLoaded', () => {
    const iValue = document.getElementById("i1");
    const iShow = document.getElementById("i2");
    const iRange = document.getElementById("i3");

    let x = 0;

    const plus = document.getElementById("btn_plus");
    const minus = document.getElementById("btn_minus");

    const vUpdate = (x) => {
        iValue.value = x;
        iShow.value = x;
        iRange.value = x;
    }

    vUpdate(x);

    plus.addEventListener('click', () => {
        if (x <= 99) {
            x++;
            vUpdate(x);
        }
    });

    minus.addEventListener('click', () => {
        if (x >= 1) {
            x--;
            vUpdate(x);
        }
    });

    iRange.addEventListener('change', () => {
        x = iRange.value;
        vUpdate(x);
    });

    iValue.addEventListener('change', () => {
        if (iValue.value <= 100 && iValue.value >= 0) {
            x = iValue.value;
        } else if (iValue.value > 100) {
            x = 100;
        } else {
            x = 0;
        }
        vUpdate(x);
    });
    
});