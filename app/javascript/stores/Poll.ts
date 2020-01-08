import { Instance, types } from "mobx-state-tree";

export type PollModel = Instance<typeof Poll>

const Poll = types
  .model({
    id: types.integer,
    lecture_id: types.integer,
    title: types.string,
    poll_options: types.array(types.string),
    created_at: types.Date,
    is_active: types.boolean,
  });


export default Poll;
