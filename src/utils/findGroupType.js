import { data } from "../Data/data"

export const findGroupTypeByBlockId = (blockId) => {
    for (const item of data) {
      const block = item.blocks.find(block => block.id === blockId);
      if (block) {
        return item.type;
      }
    }
    return null;
};