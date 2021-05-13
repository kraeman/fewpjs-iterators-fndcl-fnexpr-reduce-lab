const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const ty = () => {
    return batteryBatches.reduce(function(accumulator, CV){
        return accumulator + CV
    }, 0)
}

const totalBatteries = ty()