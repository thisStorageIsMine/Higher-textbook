function make(index, index2) {
    setTimeout(() => {
        const res = [1241,124,21,3,2,1,2];

        try {
            console.log(res[index] + res[index2]);
        } catch (error) {
            console.log("Нету настолько больших индексов")
        }

    }, 3000)
}

make(3,1);