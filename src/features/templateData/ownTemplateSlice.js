import { createSlice } from "@reduxjs/toolkit";
import {
  addElement,
  addElementToArray,
  addSubElement,
  changePalletes,
  deleteElement,
  deleteSection,
  editElement,
  reorder,
  reorderSections,
  updateSchema,
} from "./actions";
const ownTemplateSlice = createSlice({
  initialState: {},

  name: "ownTemplateSlice",
  reducers: {
    updateTemplate: (state, action) => {
      editElement(state, action);
    },
    changePalletes: (state, action) => {
      changePalletes(state, action);
    },
    addNewElement: (state, action) => {
      addElement(state, action);
    },
    addElementToArray: (state, action) => {
      addElementToArray(state, action);
    },
    addNewSubElement: (state, action) => {
      addSubElement(state, action);
    },
    deleteElement: (state, action) => {
      deleteElement(state, action);
    },
    reorder: (state, action) => {
      reorder(state, action);
    },
    reorderSection: (state, action) => {
      return reorderSections(state, action);
    },
    deleteSection: (state, action) => {
      return deleteSection(state, action);
    },
    insertSections: (state, action) => {
      const { data } = action.payload;
      delete data.owner;
      // delete data._id;
      delete data.__v;
      delete data.flag;
      return data;
    },
    deleteSchema: (state, action) => {
      return {};
    },
    fireFlag: (state, action) => {
      console.log(action.payload)
      return { savingflag: action.payload };
    },
    updateSchema: (state, action) => {
      console.log(state);
      return updateSchema(state, action);
    },
  },
});

export const ownTemplateActions = ownTemplateSlice.actions;
export default ownTemplateSlice.reducer;
