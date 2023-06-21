import { data } from "../Data/data";


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
        //get the values from formValues to compare against conditions in the jubmping logic
        let createdConditions = [];
        jumpingLogic[1].conditions.map((condition) => {
            const alias = findAliasById(condition.id);
            createdConditions.push({
                id: condition.id,
                answer: formValues[alias],
            });
            return null;
        })
        for(const jumping of jumpingLogic){
            if(jumping.conditions === createdConditions){

            }
        }
    }
    return nextField;
}

const findAliasById = (id) => {
    for (const group of data) {
        for (const block of group.blocks) {
        if (block.id === id) {
            return block.question.alias;
        }
        }
    }
    return null;
};


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
            next = {
                group: option?.referTo?.group_no,
                blockId: option?.referTo?.id
            }
        }
    });
    return next;
}

