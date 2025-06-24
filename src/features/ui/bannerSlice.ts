import {IBanner} from "../../types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchBannerImages} from "./api.ts";

export interface BannersState {
    banners: IBanner[];
    loading: boolean;
    error: string | null;
}

const initialState: BannersState = {
    banners: [],
    loading: false,
    error: null,
}

export const fetchBannerImagesAsync = createAsyncThunk (
    "banners/fetchBannerImages",
    async () => {
        return await fetchBannerImages();
    }
)

const bannerSlice = createSlice({
    name: "banners",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBannerImagesAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBannerImagesAsync.fulfilled, (state, action: PayloadAction<IBanner[]>) => {
                state.loading = false;
                state.banners = action.payload;
            })
            .addCase(fetchBannerImagesAsync.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error.message || "Баннер отсуствует :("
            })
    }
});

export default bannerSlice.reducer;