

export function getNextFieldByJumpingLogic (jumpingLogic) {
    let nextField = {};
    if(jumpingLogic.length === 1){
        // if(jumpingLogic.conditions)
        nextField = {
            group: jumpingLogic[0]?.group_no,
            blockId: jumpingLogic[0]?.id
        }
    }
    return nextField;
}

export function getNextFieldByReferTo (referTo){
    console.log("ReferTo",referTo);
    const nextField = {
        group: referTo?.group_no,
        blockId: referTo?.id
    }
    return nextField;
}

export function getNextFieldByOptions (options,form){
    const formValues = form.getFieldsValue();
    console.log('formValues',formValues);
    const keys = Object.keys(formValues);
    const latestKey = keys[keys.length - 1];
    const latestValue = formValues[latestKey];
    console.log("latestvalue",latestValue)
    let next = {}
    options.forEach(option => {
        console.log("option",option)
        if(option.value === latestValue){
            console.log("yes")
            next = {
                group: option?.referTo?.group_no,
                blockId: option?.referTo?.id
            }
        }
    });
    return next;
}

