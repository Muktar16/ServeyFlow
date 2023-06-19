




export const createConditionFromFormValuesByIds = (ids,formValues) => {
    let createdCondition = [];
    ids.map((id) => {
        const fieldAlias = findAliasById(id);
        if (fieldAlias) {
            const tempOption = {
                id : id,
                answer : formValues[fieldAlias]
            }
            createdCondition.push(tempOption);
        }
    })
}