

export function getNextFieldByJumpingLogic (jumpingLogic, formValues) {
    console.log(formValues)
    let nextField = {};
    if(jumpingLogic.length === 1){
        // if(jumpingLogic.conditions)
        nextField = {
            group: jumpingLogic[0]?.group_no,
            blockId: jumpingLogic[0]?.id
        }
    }
    else{

    }
    return nextField;
}


export function getNextFieldByReferTo (referTo){
    const nextField = {
        group: referTo?.group_no,
        blockId: referTo?.id
    }
    return nextField;
}

export function getNextFieldByOptions (options,value){
    let next = {}
    options.forEach(option => {
        if(option.value === value){
            console.log("yes")
            next = {
                group: option?.referTo?.group_no,
                blockId: option?.referTo?.id
            }
        }
    });
    return next;
}

