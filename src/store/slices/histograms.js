import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataHistograms from '../../API/dataHistograms';
import documentsFetch from "../../API/documents";
import publicationIdFetch from "../../API/publicationId";
import ArrayIds from "../../utils/ArrayIds";
import ArrayData from "../../utils/ArrayData";

export const getDataHistograms= createAsyncThunk(
  'getDataHistograms',
  async (body) => {
      const data = await dataHistograms(body);
      return ArrayData(data.data);
  }
)
export const getPublicationId = createAsyncThunk(
  'getPublicationId',
  async (body) => {
      const data = await publicationIdFetch(body);
      return ArrayIds(data);
  }
)
export const getDocuments = createAsyncThunk(
  'getDocuments',
  async (body) => {
      const data = await documentsFetch(body);
      return data
  }
)
export const histogramSlice = createSlice({
  name: 'histogram',
  initialState: {
      histogramData: null,
      status:'',
      publicationIds: [],
      documents: [],
   
  },
  reducers: {
      dropDocumentsData: (state) => {
          state.publicationIds = [];
          state.documents = [];
      },
  
  },
  extraReducers: (builder) => {
      builder
      .addCase(getDataHistograms.pending, (state)=>{
          state.status = 'pending'
      })
      .addCase(getDataHistograms.fulfilled, (state, action)=> {
          state.histogramData=action.payload;
          state.documents = [];
          state.status = 'done';
      })
      .addCase(getDataHistograms.rejected, (state) => {
          state.status = 'error';
      })
      .addCase(getPublicationId.fulfilled, (state, action)=> {
          state.publicationIds = action.payload;
      })
      .addCase(getDocuments.fulfilled, (state, action)=>{
          state.documents = [...state.documents, ...action.payload];
      })
  }
}) 

export const {dropDocumentsData} = histogramSlice.actions
export default histogramSlice.reducer